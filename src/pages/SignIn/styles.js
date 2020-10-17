import { StyleSheet } from 'react-native'
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#EA3C7A',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '15%',
    padding: 10,
    borderRadius: 6,
  },
  logo: {
    width: 70,
    height: 70
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 40,
    marginLeft: '4%',
    marginTop: '3%'
  },
  areaInput: {
    flexDirection: 'row'
  },
  input: {
    backgroundColor: '#eee',
    width: '90%',
    fontSize: 17,
    fontFamily: 'Archivo_400Regular',
    color: '#222',
    marginBottom: 15,
    padding: 10,
    borderRadius: 7
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00B4DD',
    width: '90%',
    height: 45,
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 20
  },
  submitText: {
    fontSize: 20,
    fontFamily: 'Archivo_700Bold',
    color: '#fff'
  },
  link: { 
    marginTop: 25
  },
  linkText: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular'
  }
})

export default styles

export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items: center;
justify-content: center;
`;

export const Title = styled.Text`
color: #fff;
font-family: 'Poppins_600SemiBold';
font-size: 25;
margin-bottom: 100;
`