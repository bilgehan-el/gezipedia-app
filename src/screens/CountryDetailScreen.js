import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FavoritesContext } from "../context/FavoritesContext";
import popularPlaces from "../data/popularPlaces";

const CountryDetailScreen = ({ route }) => {
  const { country } = route.params;
  const { favorites, addToFavorites } = useContext(FavoritesContext);

  
  const currency = country.currencies
    ? Object.values(country.currencies)[0]?.name
    : "N/A";
  
  const capital = country.capital ? country.capital[0] : "N/A";
  
  const places = popularPlaces[country.name.common] || [];

  const isFavorite = favorites.some((fav) => fav.cca3 === country.cca3);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: country.flags.png }} style={styles.flag} />
      <Text style={styles.name}>{country.name.common}</Text>

      <View style={styles.detail}>
        <Text style={{ fontSize:18, fontWeight:"bold" }}>Information</Text>
        <Text>Capital: {capital}</Text>
        <Text>Region: {country.region}</Text>
        <Text>Population: {country.population.toLocaleString()}</Text>
        <Text>Currency: {currency}</Text>
      </View>

      <Text style={styles.sub}>Popular Places</Text>
      
      {places.length > 0 ? (
        places.map((place, idx) => (
          <View key={idx} style={styles.placeContainer}>
            <Image source={{ uri: place.image }} style={styles.placeImage} />
            <Text style={styles.placeName}>{place.name}</Text>
            <Text style={styles.placeInfo}>{place.info}</Text>
          </View>
        ))
      ) :
      (
        <Text style={styles.detail}>No popular places listed.</Text>
      )}

      <TouchableOpacity
        style={[styles.button, isFavorite && { backgroundColor: "#ccc" }]}
        onPress={() => addToFavorites(country)}
        disabled={isFavorite}
      >
        <Text style={styles.buttonText}>
          {isFavorite ? "Added to Favorites" : "Add to Favorites"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  flag: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  detail: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: "#EBF3FB",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  sub: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  placeContainer: {
    marginBottom: 20,
    backgroundColor: "#EDF4FD",
    borderRadius: 8,
  },
  placeImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 5,
  },
  placeName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  placeInfo: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 90,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CountryDetailScreen;
