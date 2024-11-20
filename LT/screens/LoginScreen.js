// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import PostLogoImage from '../assets/postlogo.jpg';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate a login validation process
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.', [{ text: 'OK' }]);
    } else {
      // Navigate to Dashboard if credentials are valid
      navigation.navigate('Home');
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Coming Soon!', 'Password reset functionality will be available soon.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Login</Text>

      <Image
        style={styles.logo}
        source={PostLogoImage}
        resizeMode="contain"
        accessible
        accessibilityLabel="Post Logo"
      />

      <Text style={styles.subtitle}>
        By signing in, you agree to our Terms of Service and Privacy Policy.
      </Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={24} color="black" />
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={24} color="black" />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCompleteType="password"
        />
      </View>

      <TouchableOpacity style={styles.rememberMeContainer}>
        <Text style={styles.rememberMeText}>Remember Password</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={handleLogin}
          accessible
          accessibilityLabel="Login Button"
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={() => navigation.navigate('Register')}
          accessible
          accessibilityLabel="Register Button"
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleForgotPassword} accessible accessibilityLabel="Forgot Password">
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: 'gray',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    width: '90%',
    backgroundColor: '#f9f9f9',
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  rememberMeContainer: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginVertical: 8,
  },
  rememberMeText: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
  },
  button: {
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  loginButton: {
    backgroundColor: '#d9534f',
  },
  registerButton: {
    backgroundColor: 'lightgray',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPassword: {
    marginVertical: 20,
    color: '#d9534f',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});
