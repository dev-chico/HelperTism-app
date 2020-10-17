import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA3C7A',
    alignItems: 'center',
    marginBottom: 50
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
  image: {
    backgroundColor: '#03758F',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 20
  },
  main: {
    backgroundColor: '#03758F',
    width: '100%',
    height: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 12
  },
  titles: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleMain: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20
  },
  text: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 20
  },
  line: {
    backgroundColor: '#fff',
    width: '95%',
    height: 0.5,
    marginTop: 30,
    alignSelf: 'center'
  },
  subTitle: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 30,
    fontFamily: 'Poppins_600SemiBold',
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: '#00B4DD',
    marginTop: 20,
    width: 220,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18
  }
})

export default styles