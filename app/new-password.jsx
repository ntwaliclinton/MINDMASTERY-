import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useRouter, useSearchParams } from 'expo-router';
import { getAuth, confirmPasswordReset } from 'firebase/auth'; // Import Firebase methods

export default function NewPasswordScreen() {
  const router = useRouter();
  const { oobCode } = useSearchParams(); // Get the reset code from the URL query parameters
  const auth = getAuth(); // Initialize Firebase Authentication

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async () => {
    if (!newPassword || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Confirm the password reset using Firebase
      await confirmPasswordReset(auth, oobCode, newPassword);
      setMessage('Password reset successful! Redirecting to sign-in...');
      setError('');
      setTimeout(() => {
        router.replace('/sign-in'); // Navigate to the sign-in page
      }, 2000);
    } catch (err) {
      console.error('Error resetting password:', err);
      setError('Failed to reset password. Please try again.');
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Reset Password</Text>
        <Text style={styles.subheader}>Enter your New Password</Text>

        <TextInput
          placeholder="New Password"
          style={styles.input}
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {message ? <Text style={styles.successText}>{message}</Text> : null}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Pressable style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  formContainer: {
    marginTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0C97ED',
  },
  subheader: {
    marginBottom: 30,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#0C97ED',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  successText: {
    color: 'green',
    marginBottom: 15,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
});