import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* TODAY's TASKS */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          <Task text={"Today was Bayern VS REAL madrid "} />
          <Task text={"I Hope there is no new work in chibhariyo"} />
          <Task text={"text 3"} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingHorizontal: 20,
  },

  tasksWrapper: {
    paddingTop: 80,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700"
  },
  items: {
    marginTop: 20
  }
});
