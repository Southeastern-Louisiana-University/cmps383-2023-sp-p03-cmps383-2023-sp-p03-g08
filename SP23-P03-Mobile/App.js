import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.baseText}>Welcome to Entrack</Text>
        <Text>This app is in devlpoment</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Nunito Sans',
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#d8b4fe',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
