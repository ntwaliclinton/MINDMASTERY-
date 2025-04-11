import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router'; // Import useRouter for navigation
import { FontAwesome } from '@expo/vector-icons'; // For Facebook icon
import { AntDesign } from '@expo/vector-icons'; // For Google icon
import { app } from "./firebaseConfig"; // Import your Firebase configuration
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'; // Import Firebase authentication methods

export default function SignUpScreen() {
  const auth = getAuth(app); // Initialize Firebase Authentication
  const router = useRouter(); // Initialize router for navigation

  // State variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  // Function to handle user sign-up
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed up:', user);
      setError('');
      router.push('/sign-in'); // Navigate to the sign-in page after successful registration
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Failed to create an account. Please try again.');
    }
  };

  // Function to handle Google sign-in
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google sign-in successful:', user);
      router.replace('/homepage'); // Navigate to the homepage after successful Google sign-in
    } catch (error) {
      console.error('Error signing in with Google:', error);
      setError('Failed to sign in with Google. Please try again.');
    }
  };

  // Function to handle Facebook sign-in
  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Facebook sign-in successful:', user);
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
      setError('Failed to sign in with Facebook. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Create Account</Text>
        <Text style={styles.subheader}>Fill your information below</Text>

        <TextInput
          placeholder="Full Name"
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error && <Text style={styles.errorText}>{error}</Text>}

        <Pressable style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Create Account</Text>
        </Pressable>
      </View>

      <View style={styles.socialButtonsContainer}>
        <Pressable style={styles.socialButton} onPress={handleGoogleSignIn}>
          <AntDesign name="google" size={20} color="#DB4437" />
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </Pressable>

        <Pressable style={styles.socialButton} onPress={handleFacebookSignIn}>
          <FontAwesome name="facebook-square" size={20} color="#4267B2" />
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </Pressable>
      </View>

      <View style={styles.linkContainer}>
        <Text>Already have an Account? </Text>
        <Link href="/sign-in" style={styles.link}>SignIn</Link>
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
    marginBottom: 20,
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
  socialButtonsContainer: {
    marginTop: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: 'white',
    gap: 10,
  },
  socialButtonText: {
    fontSize: 16,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 30,
  },
  link: {
    color: '#0C97ED',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});