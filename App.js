import {StyleSheet, View} from 'react-native';
import Task from './components/task'

export default function App() {

  return (<View style={styles.container}>

    <View style={styles.tasksWrapper}>
      <text style={styles.sectionTitle}>Today's tasks</text>
      <View style={styles.items}><Task text={'test'}></Task></View>
    </View>
  </View>);
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#E8EAED',

  },
  tasksWrapper: {

    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {

    fontSize: 24,
    fontWeight: "bold"

  },
  items: {

    marginTop: 30,

  }
});


