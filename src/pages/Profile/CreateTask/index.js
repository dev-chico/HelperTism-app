import React, { useState, useEffect, useContext } from 'react';
import firebase from '../../../services/firebaseConnection'
import { View, Text, TouchableWithoutFeedback, Keyboard, TextInput, SafeAreaView, Alert, Button } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker'

import Picker from '../../../components/Picker'

import { AuthContext } from '../../../contexts/auth'
import { AntDesign } from '@expo/vector-icons'; 

import styles from './styles'

export default function CreateTask() {
  const { navigate } = useNavigation()
  const { user } = useContext(AuthContext)

  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [task, setTask] = useState('')
  const [day, setDay] = useState('')

  async function handleAdd() {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const schedule = `${hours}:${minutes}`

    if(task == '' || date == '' || day == '') {
      Alert.alert('Ops...', 'Você precisa preencher todos os campos!')
    } else {
      const key = await firebase.database().ref('users').child('tasks').child(user.uid).push().key

      await firebase.database().ref('tasks').child(user.uid).child(key).set({
        tarefa: task,
        hora: schedule,
        date: day,
        status: true
      })
      .then(() => {
        Alert.alert('Cadastrado com sucesso! :)', 'Cadastre mais uma se desejar.')
        setTask('')
        setHour('')
      })
    }
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <TouchableWithoutFeedback >
      <View style={styles.container}>
        <RectButton onPress={() => navigate('Profile')} style={styles.icon}>
          <AntDesign name="back" size={30} color="#fff" />
        </RectButton>

        <Text style={styles.title}>Criar rotina</Text>

        <SafeAreaView style={{ alignItems: 'center', marginTop: '12%', width: '100%'}}>
          <Text style={[styles.label, { marginLeft: '11%'}]}>Selecione o dia:</Text>
          <Picker onChange={setDay} />
          
          <View style={styles.viewInputs}>
            <Text style={styles.label}>Descrição da tarefa:</Text>
            <TextInput 
              style={styles.input}
              placeholder="Descrição da tarefa"
              onSubmitEditing={() => Keyboard.dismiss()}
              value={task}
              onChangeText={(text) => setTask(text)}
            />

            <View style={{marginTop: 20}}>
              <Button onPress={showTimepicker} title="Escolha um horário!" />
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>

          <RectButton style={styles.submitButton} onPress={handleAdd}>
            <Text style={styles.textButton}>Registrar</Text>
          </RectButton>

          <RectButton style={[styles.submitButton, { marginTop: '5%'}]} onPress={() => navigate('EditTasks')}>
            <Text style={styles.textButton}>Excluir uma rotina</Text>
          </RectButton>

        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}