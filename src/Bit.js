import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

export default (props) => {
  const { content, s } = props;

  let color = null;
  if (s) {
    if (content === 1) color = "#008000";
    if (content === 0) color = "#FF0000";
  }

  return (
    //<TouchableWithoutFeedback onPress={onOpen}>
    <TouchableWithoutFeedback>
      <View style={[styles.field, styles.regular]}>
        <Text style={[styles.label, { color }]}>{content}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  field: {
    height: 50,
    width: 50,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  regular: {
    backgroundColor: "#999",
    borderLeftColor: "#CCC",
    borderTopColor: "#CCC",
    borderRightColor: "#333",
    borderBottomColor: "#333"
  },
  label: {
    fontWeight: "bold",
    fontSize: 40
  }
});
