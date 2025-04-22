import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { getAuth} from 'firebase/auth'; // Import Firebase methods
import { app } from './firebaseConfig'; // Import your Firebase configuration
import { sendPasswordResetEmail, fetchSignInMethodsForEmail } from "firebase/auth";

export default function EmailRecoveryScreen() {
  const router = useRouter();
  const auth = getAuth(app); // Initialize Firebase Authentication
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSendLink = async () => {
    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }
  
    const normalizedEmail = email.trim().toLowerCase();
  
    try {
      console.log("Checking email:", normalizedEmail);
  
      await sendPasswordResetEmail(auth, normalizedEmail);
      
      setMessage("✅ If this email exists, a reset link has been sent.");
      setError("");

      setMessage("✅ Password reset email sent! Check your inbox.");
      setError("");
  
      setTimeout(() => {
        router.push("/sign-in");
      }, 3000);
    } catch (err) {
      console.error("Reset error:", err);
      setError("Something went wrong. Try again later.");
      setMessage("");
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