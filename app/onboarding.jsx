import { View, Text, Pressable, StyleSheet, CheckBox } from 'react-native';
import { router } from 'expo-router';

export default function OnboardingScreen() {
  const handleContinue = () => {
    // Save onboarding preferences here
    router.replace('/(tabs)'); // Go to main app after onboarding
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SET UP YOUR ACCOUNT</Text>
      <Text style={styles.subheader}>Start your Journey with us</Text>
      
      <View style={styles.section}>
        <Text style={styles.question}>What is your primary reason for using Mind Mastery?</Text>
        <View style={styles.option}>
          <CheckBox />
          <Text style={styles.optionText}>Improve focus & productivity</Text>
        </View>
        <View style={styles.option}>
          <CheckBox />
          <Text style={styles.optionText}>Manage tasks & schedules better</Text>
        </View>
        <View style={styles.option}>
          <CheckBox />
          <Text style={styles.optionText}>Achieve personal or professional goals</Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.question}>What areas of life do you want to improve?</Text>
        <View style={styles.option}>
          <CheckBox />
          <Text style={styles.optionText}>Learning & Education</Text>
        </View>
        <View style={styles.option}>
          <CheckBox />
          <Text style={styles.optionText}>Career & Work Productivity</Text>
        </View>
        <View style={styles.option}>
          <CheckBox />
          <Text style={styles.optionText}>Personal Organization & Lifestyle</Text>
        </View>
        <View style={styles.option}>
          <CheckBox />
          <Text style={styles.optionText}>Creativity & Passion Projects</Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.question}>How do you prefer to manage your daily tasks?</Text>
        <View style={styles.option}>
          <CheckBox />
          <Text style={styles.optionText}>To-do lists</Text>
        </View>
        <View style={styles.option}>
          <CheckBox />
          <Text style={styles.optionText}>Calendar-based scheduling</Text>
        </View>
        <View style={styles.option}>
          <CheckBox />
          <Text style={styles.optionText}>Time-blocking</Text>
        </View>
        <View style={styles.option}>
          <CheckBox />
          <Text style={styles.optionText}>AI-assisted suggestions</Text>
        </View>
      </View>
      
      <Pressable style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0C97ED',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 16,
    marginBottom: 30,
    color: '#666',
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    marginLeft: 10,
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