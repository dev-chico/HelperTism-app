import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../../contexts/auth'
import firebase from '../../../services/firebaseConnection'

import styles from './styles'

export default function EditProfile() {
  const { user } = useContext(AuthContext)
  const { goBack } = useNavigation()

  const [name, setName] = useState(user ? user.nome : '')
  const [age, setAge] = useState(user ? user.idade : '')
  const [nameResponsible, setNameResponsible] = useState(user ? user.nomeResponsavel : '')

  async function update() {
    const uid = user.uid

    await firebase.database().ref('users').child(uid).update({
      nome: name,
      idade: age,
      nomeResponsavel: nameResponsible
    })
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={() => goBack()} style={styles.icon}>
        <AntDesign name="back" size={30} color="#fff" />
      </RectButton>

      <Text style={styles.title}>Editar o perfil</Text>

      <View style={styles.divContainer}>

        <View style={styles.div}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput 
            style={styles.input}
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={ (text) => setName(text) }
          />
        </View>

        <View style={styles.div}>
          <Text style={styles.label}>Idade:</Text>
          <TextInput 
            style={styles.input}
            placeholder="Idade"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            value={age}
            onChangeText={ (text) => setAge(text) }
          />
        </View>

        <View style={styles.line}></View>

        <Text style={styles.subTitle}>Responsável</Text>

        <View style={styles.div}>
          <Text style={styles.label}>Nome (Responsável):</Text>
          <TextInput 
            style={styles.input}
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nameResponsible}
            onChangeText={ (text) => setNameResponsible(text) }
          />
        </View>
      </View>

      <TouchableOpacity onPress={() => update()} style={styles.btn}>
        <Text style={styles.btnText}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
}