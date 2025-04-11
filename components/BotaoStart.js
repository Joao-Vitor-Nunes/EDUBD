import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export default function StartButton() {
  return (
    <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Eu te amo amor! sz")}>
      <Text style={styles.buttonText}>Começar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    top: 30
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  },
});
