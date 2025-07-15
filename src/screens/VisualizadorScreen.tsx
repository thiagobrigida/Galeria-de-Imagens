import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const VisualizadorScreen = ({ route }: { route: any }) => {
  const { imagemSource } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={imagemSource}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default VisualizadorScreen;