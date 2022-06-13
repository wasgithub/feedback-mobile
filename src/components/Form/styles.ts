import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    marginVertical: 16,
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  titleText: {
    fontSize: 20,
    color: theme.colors.text_primary,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 9,
  },
  input: {
    height: 90,
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    color: theme.colors.text_primary,
  },
  footer: {
    flexDirection: "row",
    marginBottom: 16,
  },
});
