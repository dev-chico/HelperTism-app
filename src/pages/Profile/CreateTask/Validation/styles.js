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
    marginTop: -60,
    fontFamily: 'Poppins_600SemiBold'
  },
  line: {
    backgroundColor: '#fff',
    opacity: 0.7,
    width: '85%',
    height: 0.5,
    marginTop: 30,
    alignSelf: 'center',
    marginTop: '8%',
  },
  message: {
    color: '#fff',
    marginTop: '10%',
    fontSize: 18
  },
  main: {
    flex: 2,
    backgroundColor: '#03758F',
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 12,
    marginTop: '35%'
  },
  input: {
    backgroundColor: '#eee',
    width: '100%',
    fontSize: 17,
    fontFamily: 'Archivo_400Regular',
    color: '#222',
    marginBottom: 15,
    padding: 10,
    borderRadius: 7,
    marginTop: '10%'
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: '#00B4DD',
    marginTop: 20,
    width: '50%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginTop: '10%'
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 23
  }
})

export default styles