import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import styles from './styles';

export default function Datails({navigation}) {
  var Fruit = navigation.state.params.FruitName;
  const [list, setList] = useState([]);

  async function LoadDetails() {
    const getFruit = await fetch(
      'http://api.tropicalfruitandveg.com/tfvjsonapi.php?tfvitem=' + Fruit,
    );

    const FruitData = await getFruit.json();

    setList(FruitData.results);
  }

  useEffect(() => {
    LoadDetails();
  }, [Fruit]);

  return (
    <View>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <TouchableOpacity
            disabled={true}
            key={item.tfvname}
            onPress={() =>
              navigation.navigate('Details', {FruitName: item.tfvname})
            }>
            <Text
              style={{
                fontSize: 40,
                marginLeft: 15,
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              {item.tfvname}
            </Text>
            <Image
              source={{uri: item.imageurl}}
              style={{
                width: 200,
                height: 200,
                borderRadius: 20,
                alignSelf: 'center',
              }}
            />
            <View style={styles.ListItem}>
              <View>
                <Text style={{fontSize: 20, marginLeft: 15}}>
                  <Text
                    style={{fontSize: 20, marginLeft: 15, fontWeight: 'bold'}}>
                    Bot Name:{' '}
                  </Text>{' '}
                  {item.botname}
                </Text>
                <Text style={{fontSize: 20, marginLeft: 15}}>
                  <Text
                    style={{fontSize: 20, marginLeft: 15, fontWeight: 'bold'}}>
                    Other Name:{' '}
                  </Text>
                  {item.othname}
                </Text>
                <Text
                  style={{
                    textAlign: 'justify',
                    fontSize: 20,
                    marginLeft: 20,
                    marginRight: 20,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Description:{' '}
                  </Text>
                  {item.description}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
