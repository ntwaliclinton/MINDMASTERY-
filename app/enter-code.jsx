import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function EnterCodeScreen() {
  const handleResetPassword = () => {
    router.push('/new-password');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter Recovery Code</Text>
      <Text style={styles.subheader}>We have sent it check your email</Text>
      
      <TextInput 
        placeholder="Enter code" 
        style={styles.input}
        keyboardType="number-pad"
      />
      
      <Pressable style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
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
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 15,
    marginBottom: 30,
    borderRadius: 8,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 18,
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
});