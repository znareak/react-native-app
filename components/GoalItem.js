import { Text, Button, HStack } from "native-base";
import { StyleSheet, View } from "react-native";
import CheckBox from "react-native-bouncy-checkbox";

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 6,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#F5F5F5",
  },
});

export default function GoalItem({onChangeStatus,onDeleteGoal, checked, title, id }) {
 
  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      alignItems="flex-start"
      style={styles.goalItem}
    >
      <Text
        style={{
          textDecorationLine: checked ? "line-through" : "none",
          maxWidth: 230 - 70,
          width: 230 - 70,
          paddingRight: 10,
        }}
      >
        {title}
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <CheckBox onPress={(isSelected) => onChangeStatus(id, isSelected)} />
        <Button
          size="xs"
          onPress={() => onDeleteGoal(id)}
          colorScheme="secondary"
          variant="subtle"
        >
          Delete
        </Button>
      </View>
    </HStack>
  );
}
