import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FavoritesContext } from "../context/FavoritesContext";
import { useNavigation } from "@react-navigation/native";

const FavoritesScreen = () => {
  const { favorites } = useContext(FavoritesContext);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("CountryDetail", { country: item })}
    >
      <Image source={{ uri: item.flags.png }} style={styles.flag} />
      <Text style={styles.name}>{item.name.common}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
     
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.cca3}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#fff" 
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 20,
  },
  card: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 20, 
    backgroundColor: "#EDF4FD", 
    padding: 15,
    borderRadius: 8,
  },
  flag: { 
    width: 60, 
    height: 40, 
    marginRight: 10 
  },
  name: { 
    fontSize: 20 
  },
});

export default FavoritesScreen;
