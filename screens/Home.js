import { FlashList } from "@shopify/flash-list";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DogCard from "../components/DogCard";
import useFetchDogs from "../hooks/useFetchDogs";

const Home = () => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useFetchDogs();

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Text>An error occurred while fetching data</Text>;

  const flattenData = data.pages.flatMap((page) => page.data);

  const loadNext = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlashList
        keyExtractor={(item) => item.id}
        data={flattenData}
        renderItem={({ item }) => <DogCard dog={item} />}
        onEndReached={loadNext}
        onEndReachedThreshold={0.3}
        estimatedItemSize={100}
      />
    </SafeAreaView>
  );
};

export default Home;
