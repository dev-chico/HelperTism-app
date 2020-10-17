import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EA3C7A',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
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
  btn: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnPlay: {
    backgroundColor: '#00B4DD',
    height: 70,
    width: 130,
  },
  btnPlayText: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 25
  },
  btnContainer: {
    backgroundColor: '#B1F0FF',
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btnAbout: {
    backgroundColor: '#03758F',
    height: 70,
    width: 160,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20
  },
})

export default styles