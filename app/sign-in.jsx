import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function SignInScreen() {
  const router = useRouter();

  const handleLogin = () => {
    // Add your authentication logic here
    router.replace('/(tabs)'); // Redirect to home after login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back!</Text>
      <Text style={styles.subheader}>Hello there, Login to Continue</Text>
      
      <TextInput 
        placeholder="Username" 
        style={styles.input}
      />
      <TextInput 
        placeholder="Password" 
        style={styles.input}
        secureTextEntry
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
      
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>
      
      <Pressable style={styles.socialButton}>
        <Text>Continue with Google</Text>
      </Pressable>
      
      <Pressable style={styles.socialButton}>
        <Text>Continue with Facebook</Text>
      </Pressable>
      
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  link: {
    color: '#0C97ED',
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDD',
  },
  dividerText: {
    paddingHorizontal: 10,
    color: '#666',
  },
  socialButton: {
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: 'white',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});