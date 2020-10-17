import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../../../contexts/auth'

import styles from './styles'

export default function Validation() {
  const { goBack, navigate, } = useNavigation()
  const { user } = useContext(AuthContext)

  const [email, setEmail] = useState('')

  async function validate(email) {
    if(email === user.email) {
      return navigate('CreateTask')
    } else {
      Alert.alert('Ops...', 'Email não coincide!')
      return
    }
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={() => goBack()} style={styles.icon}>
          <AntDesign name="back" size={30} color="#fff" />
        </RectButton>

      <Text style={styles.title}>Validação</Text>
      
      <View style={styles.line}></View>

      <Text style={styles.message}>Informe seu email para continuar...</Text>
      <View style={styles.main}>
        <TextInput
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={ (text) => setEmail(text) }
        />
        <RectButton style={styles.btn} onPress={() => validate(email)}>
          <Text style={styles.btnText}>Entrar</Text>
        </RectButton>
      </View>
    </View>
  );
}