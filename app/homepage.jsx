import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'expo-router'; // Import useRouter for navigation

const Homepage = () => {
  const auth = getAuth(); // Initialize Firebase Authentication
  const router = useRouter(); // Initialize router for navigation
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Get the currently signed-in user's name
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName || 'User'); // Use displayName or fallback to 'User'
    }
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
      router.replace('/sign-in'); // Navigate to the sign-in page after signing out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MIND MASTERY</Text>
      <Text style={styles.subText}>Welcome, {userName}!</Text>

      <Pressable style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0C97ED',
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0C97ED',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Homepage;