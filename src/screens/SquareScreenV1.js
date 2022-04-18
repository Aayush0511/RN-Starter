import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 3;

const SquareScreen = () => {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {

    switch(color) {
      case 'red':
        (red + change < 0 || red + change > 255) ? null : setRed(red + change);
        return;
      case 'green':
        (green + change < 0 || green + change > 255) ? null : setGreen(green + change);
        return;
      case 'blue':
        (blue + change < 0 || blue + change > 255) ? null : setBlue(blue + change);
        return;
    }

  };

  return(
    <View>
        <ColorCounter 
          onIncrease = {() => {setColor('red', COLOR_INCREMENT)}}
          onDecrease = {() => {setColor('red', -COLOR_INCREMENT)}}
          color = "Red" 
          value = {red} />
        <ColorCounter
          onIncrease = {() => {setColor('green', COLOR_INCREMENT)}}
          onDecrease = {() => {setColor('green', -COLOR_INCREMENT)}}
          color = "Green" 
          value = {green} />
        <ColorCounter
          onIncrease = {() => {setColor('blue', COLOR_INCREMENT)}}
          onDecrease = {() => {setColor('blue', -COLOR_INCREMENT)}}
          color = "Blue"
          value = {blue} />
        <View style = {{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  );
};
  
  const styles = StyleSheet.create({
    
  });
  
  export default SquareScreen;