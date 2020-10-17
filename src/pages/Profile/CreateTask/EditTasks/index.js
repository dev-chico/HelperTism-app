import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, ActivityIndicator, FlatList} from 'react-native';
import { AuthContext } from '../../../../contexts/auth'
import firebase from '../../../../services/firebaseConnection'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'; 
import { RectButton } from 'react-native-gesture-handler'

import Picker from '../../../../components/Picker'
import Task from '../../../../components/TaskCard'

import styles from './styles'

export default function EditTasks() {
  const { goBack } = useNavigation()
  const { user } = useContext(AuthContext)

  const [day, setDay] = useState('')
  const [tasks, setTasks] = useState([])
  const [status, setStatus] = useState(false)

  useEffect(() => {
    async function loadTasks() {
      await firebase.database().ref('tasks').child(user.uid)
      .orderByChild('date').equalTo(day).on('value', (snapshot) => {
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

  }, [day])

  return (
    <View style={styles.container}>
      <RectButton onPress={() => goBack()} style={styles.icon}>
          <AntDesign name="back" size={30} color="#fff" />
      </RectButton>
      
      <Text style={styles.title}>Excluir Tarefas</Text>

      <Picker onChange={setDay} />

      <View style={styles.content}>
        {
          tasks == '' ? <Text style={styles.notTask}>Sem tarefas!</Text> :
          !status ? 
            <ActivityIndicator size="large" color="#00ff00" style={{ marginTop: '20%'}} />
          :
            <FlatList 
            data={tasks}
            keyExtractor={ item => item.key}
            renderItem={ ({ item }) => (<Task data={item} btn={true}  />) }
            />
        }
      </View>
    </View>
  );
}