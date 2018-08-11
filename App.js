import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button} from 'react-native';

export default class App extends React.Component {
  _onPressButton(){
    Alert.alert('Haz presionado el boton')
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{width: 150, height: 100, justifyContent: 'center'}}
          placeholder="Ingresa tu nombre"
        />
        <Button
          onPress={this._onPressButton}
          title="Presioname"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
