import { StyleSheet, Text, View } from 'react-native';

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText} key={dataPoint}>
        {dataPoint}
      </Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#5ce6ff',
  },
  itemText: {
    color: '#005a69',
    textAlign: 'center',
  },
});
