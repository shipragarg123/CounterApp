import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ListScreen = () => {
  const news = [
    { id: 1, title: 'News Title 1', description: 'This is the description for news 1.' },
    { id: 2, title: 'News Title 2', description: 'This is the description for news 2.' },
    { id: 3, title: 'News Title 3', description: 'This is the description for news 3.' },
  ];

  return (
    <ScrollView style={styles.container}>
        <View style={{height:64}}></View>
      {news.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ListScreen;
