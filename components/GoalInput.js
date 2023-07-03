import { View } from 'react-native'

export default function GoalInput({ onChangeTitle }) {
  return (
    <View>
      <Text style={{ marginBottom: 10 }}>Escribe tu objetivo</Text>
      <Input
        placeholder="Write your goal"
        onChangeText={onChangeTitle}
        value={goalTitle}
        aria-label="Escribe tu objetivo"
      />
    </View>
  );
}
