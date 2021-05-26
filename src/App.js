import React, { Component } from "react";
import { View } from "react-native";
import "./styles.css";
import TruthTable from "./TruthTable";

const varis = 3;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  createState = () => {
    return {
      board: table(Math.pow(2, varis), 1, 1)
    };
  };

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);

    //board[row][column] = 0;

    this.setState({ board });
    console.log("foi");
  };

  render() {
    return (
      <View>
        <TruthTable
          n={varis}
          onOpenField={this.onOpenField}
          table={this.state.board}
        />
      </View>
    );
  }
}

const table = (rows, cols, content) => {
  const matriz = [];
  for (var i = 0; i < rows; i++) {
    matriz[i] = [];
    for (var j = 0; j < cols; j++) {
      matriz[i][j] = content;
    }
  }
  return matriz;
};

const cloneBoard = (board) => {
  return board.map((rows) => {
    return rows.map((field) => {
      return { ...field };
    });
  });
};
