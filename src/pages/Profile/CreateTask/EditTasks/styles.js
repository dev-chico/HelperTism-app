import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA3C7A',
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'flex-start',
    backgroundColor: '#00809D',
    height: 60,
    width: 60,
    borderRadius: 30,
    marginTop: 45,
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 35,
    marginTop: -55,
    marginLeft: '15%',
    marginBottom: '10%',
    fontFamily: 'Poppins_600SemiBold'
  },
  content: {
    marginTop: '10%'
  },
  notTask: {
    color: '#fff',
    fontSize: 25,
    marginTop: '25%',
    fontFamily: 'Poppins_400Regular'
  }
})

export default styles