import React, {useState, useContext} from 'react';
import { Platform, ActivityIndicator, Text, View, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { RectButton } from 'react-native-gesture-handler'

import { Container, Title} from './styles';

import Logo from '../../assets/logo01.png'

import styles from './styles'

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleLogin(){
    signIn(email, password);
  }

 return (
   <View style={styles.background}>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >
        <View style={styles.logoContainer}>
        <Image source={Logo} width="60" style={styles.logo} />
        <Text style={styles.title}>HelperTism</Text>
      </View>
        
        <View style={styles.areaInput}>
          <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ (text) => setEmail(text) }
          />
        </View>

        <View style={styles.areaInput}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={ (text) => setPassword(text) }
            secureTextEntry={true}
          />
        </View>

      <RectButton style={styles.submitButton} onPress={handleLogin}>
        {
          loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <Text style={styles.submitText}>Acessar</Text>
          )
        }
      </RectButton>

      <RectButton style={styles.link} onPress={ () => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Criar uma conta!</Text>
      </RectButton>

      </Container>
   </View>
  );
}