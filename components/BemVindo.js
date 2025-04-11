import { Text, StyleSheet } from 'react-native';

export default function BemVindo() {
  return <Text style={styles.title}>Bem-vindo ao EduBD!</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
