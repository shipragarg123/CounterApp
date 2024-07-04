import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const DetailScreen = ({route, navigation}: any) => {
  const {counter} = route.params;
  const [newCounter, setNewCounter] = useState(counter);

  const goBackWithCounter = () => {
    navigation.navigate('Home', {
      newCounter: newCounter,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {newCounter}</Text>
      <Button title="Increase" onPress={() => setNewCounter(newCounter + 1)} />
      <Button title="Decrease" onPress={() => setNewCounter(newCounter - 1)} />
      <Button title="Go Back" onPress={goBackWithCounter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DetailScreen;
