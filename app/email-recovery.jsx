import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function EmailRecoveryScreen() {
  const handleSendLink = () => {
    router.push('/enter-code');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Password Recovery</Text>
      <Text style={styles.subheader}>Enter your email address to receive a password recovery code.</Text>
      
      <TextInput 
        placeholder="Email Address" 
        style={styles.input}
        keyboardType="email-address"
      />
      
      <Pressable style={styles.button} onPress={handleSendLink}>
        <Text style={styles.buttonText}>Send Recovery Link</Text>
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