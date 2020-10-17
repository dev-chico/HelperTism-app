import React, { useContext, useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import firebase from '../../services/firebaseConnection'

import { AuthContext } from '../../contexts/auth'

import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import styles from './styles'

export default function Profile() {
  const { goBack, navigate } = useNavigation()
  const { user, signOut } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [nameResponsible, setNameResponsible] = useState('')

  useEffect(() => { 
    async function loadData() {
      await firebase.database().ref('users').child(user.uid).on('value', (snapshot) => {
        setName(snapshot.val().nome)
        setAge(snapshot.val().idade)
        setNameResponsible(snapshot.val().nomeResponsavel)
      })
    }

    loadData()
  }, [])

  return (
    <ScrollView>
      
      <View style={styles.container}>
        <RectButton onPress={() => goBack()} style={styles.icon}>
          <AntDesign name="back" size={30} color="#fff" />
        </RectButton>

      <Text style={styles.title}>Meu Perfil</Text>

      <View style={styles.image}>
        <FontAwesome5 name="user-alt" size={60} color="#fff" />
      </View>

      <View style={styles.main}>
        <View style={[styles.titles, { marginTop: 8}]}>
          <Text style={styles.titleMain}>Nome: </Text>
          <Text style={styles.text}>{name}</Text>
        </View>

        <View style={styles.titles}>
          <Text style={styles.titleMain}>Idade: </Text>
          <Text style={styles.text}>{age}</Text>
        </View>

        <View style={styles.line}></View>

        <View>
          <Text style={styles.subTitle}>Responsável</Text>
          <View style={styles.titles}>
            <Text style={styles.titleMain}>Nome: </Text>
            <Text style={styles.text}>{nameResponsible}</Text>
          </View>
        </View>

          <RectButton onPress={() => navigate('EditProfile')} style={[styles.btn, { marginTop: 40 }]}>
            <Text style={styles.btnText}>Editar Informações</Text>
          </RectButton>
          
          <RectButton onPress={() => navigate('Validation')} style={styles.btn}>
            <Text style={styles.btnText}>Cadastar rotina</Text>
          </RectButton>

            <RectButton onPress={ () => signOut()} style={[styles.btn, { backgroundColor: '#f33'}]}>
            <Text style={styles.btnText}>Sair</Text>
          </RectButton>
        </View>
      </View>
    </ScrollView>
  );
}