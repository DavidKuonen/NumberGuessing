import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {

const [interactiveText, changeText] = useState('Pick a number between 1 and 100');
const [guess, changeGuess] = useState('');

const [number, changeNumber] = useState(Math.floor(Math.random()*100)+1);

const makeGuess = () => {
  if(guess > number){
    changeText('Your guess '+ guess + ' is too high')
  }
  else if(guess < number){
    changeText('Your guess '+ guess + ' is too low')
  }
  else{
    Alert.alert('Congratulations you guessed the number')
  }
 }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {interactiveText}
      </Text>
      <View style={styles.textFields}>
      <TextInput keyboardType='numeric'
      style={{width: 30, borderColor: 'gray', borderWidth: 1}}
      onChangeText={guess => changeGuess(guess)}
      value={guess}  
      />
      </View>
      <Button title='Make Guess' onPress={makeGuess}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFields: {
    paddingTop: 15,
    paddingBottom: 15
   
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }

});
