import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    color: '#333',
    fontFamily: 'nunito-bold',
    fontSize: 18,
  },
  paragraph: {
    lineHeight: 20,
    marginVertical: 8,
  },
  input: {
    borderColor: '#ddd',
    borderRadius: 6,
    borderWidth: 1,
    fontSize: 18,
    padding: 10,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  }
})

export const images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }
}