import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA3C7A',
    alignItems: 'center'
  },
  icon: {
    alignSelf: 'flex-start',
    backgroundColor: '#00809D',
    height: 60,
    width: 60,
    borderRadius: 30,
    marginTop: 45,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 30,
    marginTop: 25,
    marginBottom: 40
  },
  notTask: {
    color: '#fff',
    fontSize: 25,
    marginTop: '25%'
  }
})

export default styles