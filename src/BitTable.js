import React from "react";
import { StyleSheet, View } from "react-native";
import Bit from "./Bit";

export default (props) => {
  const rows = props.matriz.map((row, r) => {
    const columns = row.map((bit, c) => {
      return (
        //TODO! pesquisar como usar função apenas quando for passada, caso contrario não fazer nada
        <Bit
          {...bit}
          key={c}
          //onOpen={() => props.onOpenField(r, c)}
          content={props.matriz[r][c]}
          s={props.s}
        />
      );
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
