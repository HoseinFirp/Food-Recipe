import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles =StyleSheet.create({
  subtitle: {
    color: '#5ce6ff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    borderBottomColor: 'white',
    marginVertical: 4,
    padding: 6,
    borderBottomWidth: 2,
    marginHorizontal: 12,
  },
})
