import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function NewPasswordScreen() {
  const handleReset = () => {
    // Add password reset logic here
    router.replace('/sign-in'); // Go back to sign in after reset
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reset Password</Text>
      <Text style={styles.subheader}>Enter your New Password</Text>
      
      <TextInput 
        placeholder="New Password" 
        style={styles.input}
        secureTextEntry
      />
      <TextInput 
        placeholder="Confirm Password" 
        style={styles.input}
        secureTextEntry
      />
      
      <Pressable style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
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
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});