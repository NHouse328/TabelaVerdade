import React, { Component } from "react";
import { View } from "react-native";
import BitTable from "./BitTable";
import "./styles.css";

export default class App extends Component {
  render() {
    const matriz = truthTable(4, 16);

    const newMatriz = rotateTable(matriz);

    return (
      <View>
        <BitTable matriz={newMatriz} />
      </View>
    );
  }
}

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
