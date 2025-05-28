import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [countries, setCountries] = useState([]);
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

  const renderItem = ({ item }) => (
    <View style={styles.card}>

      <TouchableOpacity
        onPress={() => navigation.navigate("CountryDetail", { country: item })}
      >
        <Image source={{ uri: item.flags.png }} style={styles.flag} />
        <Text style={styles.name}>{item.name.common}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Highlights</Text>
        
        <FlatList
          data={countries}
          keyExtractor={(item) => item.cca3}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
          initialNumToRender={10}
          maxToRenderPerBatch={20}
          removeClippedSubviews={true}
        />
      
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
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
});

export default HomeScreen;
