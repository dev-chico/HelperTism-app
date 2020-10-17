import React from 'react';
import RNPickerSelect from 'react-native-picker-select'
import { View, } from 'react-native'

export default function Picker({ onChange }){
  return(
    <View>
      <RNPickerSelect
      style={{
        inputAndroid:{
          width: 320,
          height: 50,
          padding: 5,
          backgroundColor: '#FFF',
          fontSize: 16,
          borderRadius: 6,
          marginTop: '1%',
        }
      }}
      placeholder={{
        label: 'Selecione o dia',
        color: '#222',
        value: null,
      }}
      onValueChange={ (dia) => onChange(dia) }
      items={[
        {label: 'Segunda-Feira', value: 'seg', color: '#222'},
        {label: 'Terça-Feira', value: 'ter', color: '#222'},
        {label: 'Quarta-Feira', value: 'qua', color: '#222'},
        {label: 'Quinta-Feira', value: 'qui', color: '#222'},
        {label: 'Sexta-Feira', value: 'sex', color: '#222'},
        {label: 'Sábado', value: 'sab', color: '#222'},
        {label: 'Domingo', value: 'dom', color: '#222'},
      ]}
      />
    </View>
  )
}