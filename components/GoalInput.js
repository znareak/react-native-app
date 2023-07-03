import { View } from "react-native";
import { Text, Input, Button } from "native-base";
import { useState } from "react";

export default function GoalInput({ addGoal }) {
  const [goalTitle, setGoalTitle] = useState("");
  const onChangeTitle = (text) => setGoalTitle(text);
  const resetGoalTitle = () => setGoalTitle("");

  return (
    <View>
      <Text style={{ marginBottom: 10, marginBottom: 0 }}>
        Escribe tu objetivo
      </Text>
      <Input
        placeholder="Write your goal"
        onChangeText={onChangeTitle}
        value={goalTitle}
        aria-label="Escribe tu objetivo"
      />

      <Button
        style={{ marginTop: 10 }}
        onPress={() => addGoal(goalTitle, resetGoalTitle)}
      >
        Agregar a la lista
      </Button>
    </View>
  );
}
