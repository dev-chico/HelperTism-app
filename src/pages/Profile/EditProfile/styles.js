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
    marginTop: '-13%',
    marginLeft: '10%',
    fontFamily: 'Poppins_600SemiBold'
  },
  input: {
    backgroundColor: '#eee',
    width: '80%',
    fontSize: 17,
    fontFamily: 'Archivo_400Regular',
    color: '#222',
    marginBottom: 15,
    padding: 10,
    borderRadius: 7
  },
  div: {
    width: '100%',
    marginLeft: '8%'
  },
  divContainer: {
    width: '100%',
    marginTop: '10%'
  },
  label: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 18
  },
  line: {
    backgroundColor: '#fff',
    width: '85%',
    height: 0.5,
    marginTop: 30,
    alignSelf: 'center'
  },
  subTitle: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: '8%',
    marginTop: '10%',
    fontSize: 30,
    fontFamily: 'Poppins_600SemiBold',
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
    fontSize: 20
  }
})

export default styles