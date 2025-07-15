import React from 'react';
import { ScrollView, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';

const imagens: ImageSourcePropType[] = [
    require('../../assets/imagem1.jpg'),
    require('../../assets/imagem2.jpeg'),
    require('../../assets/imagem3.jpg'),
    require('../../assets/imagem4.jpg'),
    require('../../assets/imagem5.jpg'),
    require('../../assets/imagem6.jpg'),
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