import React from 'react';
import { View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'; 
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

export default function ButtonMenu(props) {
  const { navigate } = useNavigation()

  return (
      <RectButton style={styles.btn} onPress={() => navigate(props.navigation)}>
        <FontAwesome5 name={props.nameIcon} size={40} color="#fff" />
        <Text style={styles.btnText}>{props.title}</Text>
      </RectButton>
  )
}