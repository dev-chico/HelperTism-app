import React from 'react';
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import logo from '../../assets/logo01.png'
import styles from './styles'

export default function Home() {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} width="60" style={styles.logo} />
        <Text style={styles.title}>HelperTism</Text>
      </View>

      <RectButton onPress={() => navigate('Menu')} style={[styles.btnPlay, styles.btn]}>
        <Text style={styles.btnPlayText}>Jogar</Text>
      </RectButton>

      <View style={styles.btnContainer}>
        <RectButton onPress={() => navigate('Tasks')} style={[styles.btnAbout, styles.btn, { marginTop: 15}]}>
          <Text style={styles.btnText}>Minha rotina</Text>
        </RectButton>

        <RectButton onPress={() => navigate('Profile')} style={[styles.btnAbout, styles.btn, { marginBottom: 15}]}>
          <Text style={styles.btnText}>Meu perfil</Text>
        </RectButton>
      </View>
    </View>
  );
}