import {StyleSheet,FlatList, Text, View, SafeAreaView, TextInput } from 'react-native';
import React from 'react';
import patika_data from './data.json';
import PatikaCard from './src/StoreCard';

 function App() {
  return (
   <SafeAreaView style={styles.container}>
    <Text style={styles.patikastore_title}>PATİKASTORE</Text>
    <TextInput inlineImageLeft='search_icon' style={styles.search_input} placeholder="Ara..." />
    <View>
      <FlatList
      data={patika_data}
      renderItem={({item}) => <PatikaCard product={item}/>}
      numColumns={2}
      />

    </View>
   </SafeAreaView>
  );
}

//Style içeriği
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  patikastore_title: {
    fontFamily: "Nunito",
    fontSize: 35,
    color: "#800080",
    fontWeight: "bold",
    marginLeft:10,
    marginRight:10,
  },
  search_input: {
    backgroundColor: "#eceff1",
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    margin:10,
  },
  flastlist:{
    backgroundColor:"white",
    alignItems:"center"
  }
  

})

export default App;