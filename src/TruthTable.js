import React from "react";
import { View } from "react-native";
import BitTable from "./BitTable";

export default (props) => {
  const rows = Math.pow(2, props.n);
  const cols = props.n;
  const matriz = truthTable(cols, rows);
  const newMatriz = rotateTable(matriz);
  const abcMatriz = labelTable(cols);

  return (
    <View>
      <BitTable matriz={abcMatriz} />
      <View style={{ flexDirection: "row" }}>
        <BitTable matriz={newMatriz} />
        <BitTable
          matriz={props.table}
          s
          //onOpenField={props.onOpenField}
        />
      </View>
    </View>
  );
};

const truthTable = (r, c) => {
  //Linhas
  var tabela = new Array(r);

  //Varia Linhas
  for (var i = 0; i < r; i++) {
    //Colunas
    tabela[i] = new Array(c);
    var ind = 0;
    var turn = true;
    var cont = Math.pow(2, i);
    //Varia Coluna
    for (var j = 0; j < c; j++) {
      if (ind <= cont - 1 && turn) {
        ind++;
        tabela[i][j] = 0;
      } else {
        turn = false;
        ind--;
        tabela[i][j] = 1;
      }
      if (ind === 0) {
        turn = true;
      }
    }
  }
  //console.table(tabela);
  return tabela;
};

const rotateTable = (matriz) => {
  var newCols = matriz.length;
  var newRows = matriz[0].length;

  var newMatriz = new Array(newRows);

  for (var i = 0; i < newRows; i++) {
    //Colunas
    newMatriz[i] = new Array(newCols);
    //Varia Coluna
    for (var j = 0; j < newCols; j++) {
      newMatriz[i][j] = matriz[newCols - 1 - j][i];
    }
  }

  //console.table(newMatriz);
  //console.log(newRows);
  return newMatriz;
};

const labelTable = (cols) => {
  const abc = ["A", "B", "C", "D", "E", "F", "G"];
  var matriz = [];

  for (var i = 0; i < 1; i++) {
    matriz[i] = [];
    for (var j = 0; j < cols; j++) {
      matriz[i][j] = abc[j];
    }
  }

  matriz[0][cols + 1] = "S";

  return matriz;
};

// const styles = StyleSheet.create({
//   container: {
//     // flexDirection:          'row',
//     backgroundColor: "#EEE"
//   }
// });
