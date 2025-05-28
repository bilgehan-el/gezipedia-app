import React, { useEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { FavoritesContext } from "../context/FavoritesContext";
import { Ionicons } from "@expo/vector-icons";

const SearchScreen = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const { favorites, addToFavorites } = useContext(FavoritesContext);
  const navigation = useNavigation();


  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      const filtered = res.data.filter((c) =>
        [
          "France",
          "Germany",
          "Japan",
          "Italy",
          "Spain",
          "Turkey",
          "United States",
          "United Kingdom",
          "Brazil",
          "Egypt",
          "Canada",
          "Australia",
          "Russia",
          "China",
          "India",
        ].includes(c.name.common)
      );
      setCountries(filtered);
    });
  }, 
  []);

  const filteredCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(query.toLowerCase())
  );

  const renderItem = ({ item }) => {
    const isFavorite = favorites.some((fav) => fav.cca3 === item.cca3);
    return (
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CountryDetail", { country: item })
          }
        >

          <Image source={{ uri: item.flags.png }} style={styles.flag} />
          <Text style={styles.name}>{item.name.common}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, isFavorite && { backgroundColor: "#ccc" }]}
          onPress={() => addToFavorites(item)}
          disabled={isFavorite}
        >
          <Ionicons
            name="heart"
            size={18}
            color="white"
            style={{ marginRight: 6 }}
          />
          
          <Text style={styles.buttonText}>
            {isFavorite ? "Added to Favorites" : "Add to Favorites"}
          </Text>
        </TouchableOpacity>

      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a country..."
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filteredCountries}
        keyExtractor={(item) => item.cca3}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        initialNumToRender={10}
        maxToRenderPerBatch={20}
        removeClippedSubviews={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  input: {
    borderColor: "#559BD9",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  card: {
    marginBottom: 20,
    backgroundColor: "#EDF4FD",
    padding: 10,
    borderRadius: 8,
  },
  flag: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2165BF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SearchScreen;
