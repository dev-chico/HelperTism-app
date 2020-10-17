import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import firebase from '../../services/firebaseConnection'
import { AuthContext } from '../../contexts/auth'

import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../../components/TaskCard'

import { AntDesign } from '@expo/vector-icons'; 

import styles from './styles'

export default function Tasks() {
  const { goBack } = useNavigation()
  
  const [tasks, setTasks] = useState([])
  const [status, setStatus] = useState(false)
  const [contains, setContains] = useState(true)

  const { user } = useContext(AuthContext)

  useEffect(() => {
    const today = moment().locale('pt-br').format('ddd')

    async function loadTasks() {
      await firebase.database().ref('tasks').child(user.uid)
        .orderByChild('date').equalTo(today)
        .on('value', (snapshot) => {
          setTasks([])

          if(!snapshot) {
            setContains(false)
          } else {
            snapshot.forEach((childItem) => {
              let list = {
                key: childItem.key,
                task: childItem.val().tarefa,
                hour: childItem.val().hora,
                date: childItem.val().date,
                status: childItem.val().status
              }
              setStatus(true)
              setTasks(oldArray => [...oldArray, list])
            })
          }

        })
    }

    loadTasks()
  }, [])

  return (
    <View style={styles.container}>
      <RectButton onPress={() => goBack()} style={styles.icon}>
        <AntDesign name="back" size={30} color="#fff" />
      </RectButton>
      <Text style={styles.title}>Suas tarefas de hoje</Text>

       {
         tasks == '' ? <Text style={styles.notTask}>Você não tem tarefas hoje!</Text> :
          !status ? 
            <ActivityIndicator size="large" color="#00ff00" style={{ marginTop: '20%'}} />
          :
           <FlatList 
             data={tasks}
             keyExtractor={ item => item.key}
             renderItem={ ({ item }) => (<Task data={item} />) }
          />
       }

    </View>
  );
}