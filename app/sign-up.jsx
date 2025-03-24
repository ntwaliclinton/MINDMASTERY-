import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
      <Text style={styles.subheader}>Fill your information below</Text>
      
      <TextInput 
        placeholder="Full Name" 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Username" 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Email" 
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput 
        placeholder="Password" 
        style={styles.input}
        secureTextEntry
      />
      
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>
      
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
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  link: {
    color: '#0C97ED',
    fontWeight: 'bold',
  },
});