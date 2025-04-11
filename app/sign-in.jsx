import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { app } from './firebaseConfig'; // Import your Firebase configuration
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase sign-in method

export default function SignInScreen() {
  const router = useRouter();
  const auth = getAuth(app); // Initialize Firebase Authentication
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed in:', user);
      router.replace('/homepage'); // Redirect to home after successful login
    } catch (error) {
      console.error('Error signing in:', error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Welcome Back!</Text>
        <Text style={styles.subheader}>Hello there, Login to Continue</Text>

        {error && <Text style={styles.errorText}>{error}</Text>}

        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable
          style={styles.forgotPassword}
          onPress={() => router.push('/email-recovery')}
        >
          <Text style={styles.link}>Forgot my password</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>

      <View style={styles.linkContainer}>
        <Text>Don't have an Account? </Text>
        <Link href="/sign-up" style={styles.link}>Signup</Link>
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
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  link: {
    color: '#0C97ED',
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 30,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});