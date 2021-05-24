import React from "react";
import { StyleSheet, View } from "react-native";
import Bit from "./Bit";

export default (props) => {
  const rows = props.matriz.map((row, r) => {
    const columns = row.map((bit, c) => {
      return <Bit {...bit} key={c} content={props.matriz[r][c]} />;
    });
    return (
      <View key={r} style={{ flexDirection: "row" }}>
        {columns}
      </View>
    );
  });
  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    // flexDirection:          'row',
    backgroundColor: "#EEE"
  }
});
