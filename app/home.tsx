import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Image placed above the title */}
      <Image 
        source={require('../assets/images/splash-image.png')} 
        style={styles.image}
        resizeMode="contain"
      />
      
      <Text style={styles.title}>MIND MASTERY</Text>
      <Text style={styles.subtitle}>The Best Productivity Mobile App</Text>
      
      <Link href="/register" asChild>
      <Text style={styles.buttonText}>GET STARTED</Text>
        {/* <Pressable style={styles.button}       
        onPress={() => router.push('/sign-up')}>
     
        </Pressable> */}
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 400,
    height: 400,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0C97ED',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
    color: '#666',
  },
  button: {
    backgroundColor: '#0C97ED',
    padding: 15,
    borderRadius: 10,
    width: 300,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});