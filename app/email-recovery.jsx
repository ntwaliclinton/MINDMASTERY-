import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { getAuth, fetchSignInMethodsForEmail } from 'firebase/auth'; // Import Firebase methods
import { app } from './firebaseConfig'; // Import your Firebase configuration

export default function EmailRecoveryScreen() {
  const router = useRouter();
  const auth = getAuth(app); // Initialize Firebase Authentication
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSendLink = async () => {
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      // Verify if the email exists in Firebase Authentication
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length === 0) {
        setError('This email is not registered. Please check and try again.');
        return;
      }

      // Generate a random 4-digit code
      const recoveryCode = Math.floor(1000 + Math.random() * 9000).toString();

      // Simulate sending the recovery code via email (replace this with your backend API call)
      console.log(`Sending recovery code ${recoveryCode} to email: ${email}`);

      // Store the recovery code in local storage or pass it to the next screen
      localStorage.setItem('recoveryCode', recoveryCode);

      setError('');
      setMessage('Recovery code sent! Check your email.');
      setTimeout(() => {
        router.push('/enter-code'); // Navigate to the enter-code page
      }, 2000);
    } catch (err) {
      console.error('Error verifying email or sending recovery code:', err);
      setError('Failed to send recovery code. Please try again.');
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Password Recovery</Text>
        <Text style={styles.subheader}>Enter your email address to receive a password recovery code.</Text>

        <TextInput
          placeholder="Email Address"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {message ? <Text style={styles.successText}>{message}</Text> : null}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Pressable style={styles.button} onPress={handleSendLink}>
          <Text style={styles.buttonText}>Send Recovery Link</Text>
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
    marginBottom: 30,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#0C97ED',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
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