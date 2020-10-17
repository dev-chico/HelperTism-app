import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerOn: {
    backgroundColor: '#03758F', 
    alignItems: 'flex-start',
    justifyContent: 'center',
    
    width: '90%',
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,

  },
  containerOff: {
    backgroundColor: '#03758F', 
    opacity: 0.5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    
    width: '90%',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15
  },
  hour: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Poppins_600SemiBold'
  },
  description: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'Poppins_600SemiBold',
    width: '75%'
  },
  containerContent: {
    width: '96%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default styles