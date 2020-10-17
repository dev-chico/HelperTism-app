import React, {useState, useContext} from 'react';
import { 
  Platform, 
  ActivityIndicator, 
  Text, 
  View, 
  KeyboardAvoidingView,
  Image,
  TextInput,
  Alert

} from 'react-native';

import { RectButton } from 'react-native-gesture-handler'
import { AuthContext } from '../../contexts/auth';
import { Container } from '../SignIn/styles';

import styles from '../SignIn/styles'


export default function SignUp() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const [nomeResponsavel, setNomeResponsavel] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { signUp, loadingAuth} = useContext(AuthContext);

  function handleSignUp(){

    if(nome !== ''
      && idade !== ''
      && nomeResponsavel !== ''
      && email !== ''
      && password !== '') {

      signUp(email, password, nome, idade, nomeResponsavel);

    } else {
      Alert.alert('Ops...', 'Você deve preencher todos os campos!')
      return;
    }
    
  }
 
 return (
   <View style={styles.background}>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >
        <Text style={styles.title}>Estudante</Text>
        <View style={styles.areaInput}>
          <TextInput
          style={styles.input}
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="none"
          value={nome}
          onChangeText={ (text) => setNome(text) }
          />
        </View>

        <View style={[styles.areaInput, { marginBottom: 20}]}>
          <TextInput
          style={styles.input}
          placeholder="Idade"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="numeric"

          value={idade}
          onChangeText={ (text) => setIdade(text) }
          />
        </View>

        <Text style={styles.title}>Responsável</Text>

        <View style={styles.areaInput}>
          <TextInput
          style={styles.input}
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="none"
          value={nomeResponsavel}
          onChangeText={ (text) => setNomeResponsavel(text) }
          />
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

      <RectButton style={styles.submitButton} onPress={handleSignUp}>
        {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <Text style={styles.submitText}>Cadastrar</Text>
            )
        }
      </RectButton>

      </Container>
   </View>
  );
}