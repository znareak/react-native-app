import React, { useState } from "react";
import {
  NativeBaseProvider,
  Input,
  Text,
  Button,
  extendTheme,
  useToast,
} from "native-base";
import uuid from "react-native-uuid";
import { StyleSheet, View, FlatList } from "react-native";
import { useFonts } from "expo-font";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const theme = extendTheme({
  // config: { initialColorMode: "dark" },
  fontConfig: {
    Inter: {
      100: {
        normal: "Inter-Light",
        italic: "Roboto-LightItalic",
      },
      200: {
        normal: "Inter-Light",
      },
      300: {
        normal: "Inter-Light",
      },
      400: {
        normal: "Inter-Regular",
      },
      500: {
        normal: "Inter-Medium",
      },
      600: {
        normal: "Inter-Medium",
      },
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
    mono: "Inter",
  },
});

export default function App() {
  const toast = useToast();
  const [goals, setGoals] = useState([]);
  const [goalTitle, setGoalTitle] = useState("");
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
  });

  const addGoal = () => {
    if (!goalTitle.trim()) {
      toast.show({
        title: "Please Enter Text",
        status: "warning",
      });
      return;
    }
    const newGoal = {
      id: uuid.v4(),
      title: goalTitle,
      checked: false,
    };
    setGoals((prev) => [newGoal, ...prev]);
    setGoalTitle("");
  };

  const onChangeTitle = (text) => {
    setGoalTitle(text);
  };

  const onChangeStatus = (id, isSelected) => {
    const goalsNew = goals.map((goal) => {
      if (id === goal.id) {
        return {
          ...goal,
          checked: isSelected,
        };
      }
      return goal;
    });
    console.log(goalsNew);
    setGoals(goalsNew);
  };

  const onDeleteGoal = (id) => {
    const filtered = goals.filter((goal) => goal.id !== id);
    setGoals(filtered);
  };

  if (!fontsLoaded) return;

  return (
    <NativeBaseProvider theme={theme}>
      <View style={styles.app}>
        <GoalInput onChangeTitle={onChangeTitle} />

        <Button style={{ marginTop: 10 }} onPress={addGoal}>
          Agregar a la lista
        </Button>

        <FlatList
          data={goals}
          style={{ marginTop: 10, flex: 1 }}
          keyExtractor={(item) => item.id}
          renderItem={(data) => (
            <GoalItem {...{ onDeleteGoal, onChangeStatus, ...data.item }} />
          )}
        />
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  app: {
    paddingTop: 70,
    padding: 30,
    flex: 1,
  },
});
