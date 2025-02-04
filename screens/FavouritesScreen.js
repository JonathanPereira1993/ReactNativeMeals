import { Text, View } from "react-native";

// import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
// import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";

import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

function FavouritesScreen() {
  // const FavouriteMealsCtx = useContext(FavouritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favouriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
