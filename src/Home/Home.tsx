import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = ({navigation, route}: any) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (route.params?.newCounter) {
      setCounter(route.params.newCounter);
    }
  }, [route.params?.newCounter]);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {counter}</Text>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail', {counter, navigation})}
      />
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

export default Home;
