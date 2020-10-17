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
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 37,
    marginBottom: '8%',
    marginTop: '0%',
    marginLeft: '5%',
    fontFamily: 'Poppins_600SemiBold'
  },
  image: {
    width: '90%',
    maxHeight: 320,
    alignSelf: 'center',
    borderRadius: 12
  },
  questions: {
    color: '#fff',
    backgroundColor: '#00B4DD',
    padding: 8,
    borderRadius: 6,
    marginRight: '7%',
    marginLeft: '7%',
    marginTop: '7%',
    width: '35%',
    height: 45,
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center'
  },
  questionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    backgroundColor: '#fff',
    width: '95%',
    height: 0.5,
    marginTop: 15,
    alignSelf: 'center'
  },
  btn: {
    color: '#fff',
    marginTop: '10%',
    marginLeft: '5%',
    marginBottom: '10%',
    padding: 8,
    borderRadius: 6,
    fontSize: 20,
    width: '30%',
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold'
  },
  btnNext: {
    backgroundColor: '#03758F',
  },
  btnFinish: {
    backgroundColor: '#28A745',
  },
  msgFinishGame: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Poppins_600SemiBold',
    marginLeft: '5%'
  },
  subtitle: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    marginLeft: '5%'
  },
  questionsCorrects: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    marginLeft: '5%',
    backgroundColor: '#00B4DD',
    marginTop: '2%',
    width: 200,
    padding: 8,
    borderRadius: 6
  },
  selected: {
    backgroundColor: '#343A40',
    color: '#fff'
  }
})

export default styles