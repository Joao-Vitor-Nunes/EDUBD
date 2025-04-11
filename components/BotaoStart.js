import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BotaoStart() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.button} 
      onPress={() => navigation.navigate('Home')}
    >
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
