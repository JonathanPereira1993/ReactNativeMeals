import { Text } from "react-native";

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  return <Text>This is the Meal Detail screen ({mealId})</Text>;
}

export default MealDetailsScreen;
