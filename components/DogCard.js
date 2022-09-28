import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const DogCard = ({ dog }) => {
  return (
    <View>
      <View style={styles.row}>
        <Image source={{ uri: dog.image.url }} style={styles.pic} />
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{dog.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DCDCDC",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#222",
    fontSize: 18,
  },
});

export default DogCard;
