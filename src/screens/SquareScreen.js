import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 5;
const reducer = (state, action) => {
  //state === { red: number, green: number, blue: number }
  //action === { colorToChange: 'red' || 'green' || 'blue', amount: 10 || -10 }         Convention: action === { type: x, payload: y }
  
  switch(action.colorToChange) {
    case 'red':
      return (state.red + action.amount > 255 || state.red + action.amount < 0) ? state : ({ ...state, red: state.red + action.amount });
    case 'green':
      return (state.green + action.amount > 255 || state.green + action.amount < 0) ? state : ({ ...state, green: state.green + action.amount });
    case 'blue':
      return (state.blue + action.amount > 255 || state.blue + action.amount < 0) ? state : ({ ...state, blue: state.blue + action.amount });
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, runMyReducer] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  return(
    <View>
        <ColorCounter 
          onIncrease = {() => {runMyReducer({ colorToChange: 'red', amount: COLOR_INCREMENT})}}
          onDecrease = {() => {runMyReducer({ colorToChange: 'red', amount: -COLOR_INCREMENT})}}
          color = "Red" 
          value = {state.red} />
        <ColorCounter
          onIncrease = {() => {runMyReducer({ colorToChange: 'green', amount: COLOR_INCREMENT})}}
          onDecrease = {() => {runMyReducer({ colorToChange: 'green', amount: -COLOR_INCREMENT})}}
          color = "Green" 
          value = {state.green} />
        <ColorCounter
          onIncrease = {() => {runMyReducer({ colorToChange: 'blue', amount: COLOR_INCREMENT})}}
          onDecrease = {() => {runMyReducer({ colorToChange: 'blue', amount: -COLOR_INCREMENT})}}
          color = "Blue"
          value = {state.blue} />
        <View style = {{ height: 150, width: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
    </View>
  );
};
  
  const styles = StyleSheet.create({
    
  });
  
  export default SquareScreen;