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
    fontFamily: 'Poppins_600SemiBold'
  },
  label: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    alignSelf: 'flex-start'
  },
  viewInputs: {
    marginTop: '8%'
  },
  addTask: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10%'
  },  
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 6,
    width: 320,
    height: 50,
    marginTop: '1%',
  },
  btnTime: {
    backgroundColor: '#f33'
  },

  submitButton: {
    height: 50,
    width: 320,
    marginTop: '10%',
    backgroundColor: '#00B4DD',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold'
  }
})

export default styles