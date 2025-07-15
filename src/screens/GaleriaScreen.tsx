import React from 'react';
import { ScrollView, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';

const imagens: ImageSourcePropType[] = [
    require('../../assets/img01.jpg'),
    require('../../assets/img02.jpeg'),
    require('../../assets/img03.jpg'),
    require('../../assets/img04.jpg'),
    require('../../assets/img05.jpg'),
    require('../../assets/img06.jpg'),
  ];
  
  const GaleriaScreen = ({ navigation }: { navigation: any }) => {
    const handleImagePress = (source: ImageSourcePropType) => {
      navigation.navigate('Visualizador', { imagemSource: source });
    };
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {imagens.map((imagemSource, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleImagePress(imagemSource)}
            style={styles.touchable}
          >
            <Image source={imagemSource} style={styles.thumbnail} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    touchable: {
      width: '33%',
      aspectRatio: 1,
      padding: 4,
    },
    thumbnail: {
      width: '100%',
      height: '100%',
    },
  });
  
  export default GaleriaScreen;