import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  SafeAreaView,
} from 'react-native';
import styles from './styles';

export default function Home({navigation}) {
  const [FruitName, setFruitName] = useState('');
  const [list, setList] = useState([]);

  async function LoadList() {
    const getFruit = await fetch(
      'http://api.tropicalfruitandveg.com/tfvjsonapi.php?search=all',
    );

    const FruitData = await getFruit.json();

    setList(FruitData.results);
  }

  useEffect(() => {
    LoadList();
  }, [FruitName]);

  async function handleSubmit() {
    if (FruitName == '') {
      Alert.alert('Warning', 'The field must be filled!');
    } else {
      const getFruit = await fetch(
        'http://api.tropicalfruitandveg.com/tfvjsonapi.php?tfvitem=' +
          FruitName,
      );

      const FruitData = await getFruit.json();
      setList(FruitData.results);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.SearchBox}>
        <TextInput
          placeholder="
          Enter the name of the fruit or vegetable"
          style={styles.input}
          value={FruitName}
          onChangeText={setFruitName}></TextInput>
        <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
          <Image
            style={styles.IconButton}
            source={require('../../../assets/img/procurar.png')}></Image>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
          fontWeight: 'bold',
          margin: 5,
        }}>
        Fruit List{' '}
      </Text>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.tfvname}
            onPress={() =>
              navigation.navigate('Details', {FruitName: item.tfvname})
            }>
            <View style={styles.ListItem}>
              <Image
                source={{uri: item.imageurl}}
                style={{width: 50, height: 50, borderRadius: 20}}
              />
              <Text style={{fontSize: 20, marginLeft: 15}}>{item.tfvname}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
