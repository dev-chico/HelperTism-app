import React, {useState, useEffect, useContext} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 
import firebase from '../../services/firebaseConnection'
import { AuthContext } from '../../contexts/auth'

import moment from 'moment'
import 'moment/locale/pt-br'

import styles from './styles'

export default function TaskCard({ data, btn }) {

  const [status, setStatus] = useState(data.status)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const today = moment().locale('pt-br').format('ddd')

    async function loadTasksStatus() {
      await firebase.database().ref('tasks').child(user.uid).child(data.key).update({
        status: status
      })
    }

    loadTasksStatus()
  }, [status])

  async function removeTask() {
    await firebase.database().ref('tasks').child(user.uid).child(data.key).remove()
  }

  return (
    <SafeAreaView style={{ alignItems: 'center'}}>
      <View style={status ? styles.containerOn : styles.containerOff}>
        <Text style={styles.hour}>{data.hour}</Text>

        <View style={styles.containerContent}>
          <Text style={styles.description}>{data.task}</Text>

            {
              status ?
                <TouchableOpacity onPress={() => setStatus(false)}>
                  <AntDesign name="checksquare" size={30} color="#00FD00" />
                </TouchableOpacity>
              :
                <TouchableOpacity onPress={() => setStatus(true)}>
                  <FontAwesome name="refresh" size={35} color="#00FD00" />
                </TouchableOpacity>
            }

            {
              btn ?
                <TouchableOpacity onPress={() => removeTask()}>
                  <FontAwesome name="trash" size={35} color="#333" />
                </TouchableOpacity>
              :
                null
            }

        </View>
      </View>
    </SafeAreaView>
  );
}