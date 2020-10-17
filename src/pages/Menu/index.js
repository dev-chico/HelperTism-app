import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'; 

import styles from './styles'
import ButtonMenu from '../../components/ButtonMenu';

export default function Menu() {
  const { goBack, navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <RectButton onPress={() => goBack()} style={styles.icon}>
        <AntDesign name="back" size={30} color="#fff" />
      </RectButton>

      <View style={styles.main}>
        <ButtonMenu navigation='QuizAnimals' title="Animais" nameIcon="dog" />
        <ButtonMenu navigation='Menu' title="Números" nameIcon="sort-numeric-down" />
        <ButtonMenu navigation='Menu' title="Cores" nameIcon="adjust" />
      </View>
    </View>
  );
}