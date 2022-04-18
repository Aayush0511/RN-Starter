import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) => {
    //state === { count: number }
    //action === { type: 'increment' || 'decrement', amount: 1 }

    switch(action.type) {
        case 'increment':
            return { ...state, count: state.count + action.amount };
        case 'decrement':
            return { ...state, count: state.count - action.amount };
        default:
            return state;
    }
};

const CounterScreen = () => {
    //const [counter, setCounter] = useState(0);
    const [state, setCounter] = useReducer(reducer, { count: 0 })
    return(
        <View>
            <Button title = "Increase" onPress = {() => {
                // Don't do this --> counter++
                //setCounter(counter + 1);
                setCounter({ type: 'increment', amount: 1 })
            }} />
            <Button title = "Decrease" onPress = {() => {
                // Don't do this --> counter--
                //setCounter(counter - 1);
                setCounter({ type: 'decrement', amount: -1 })
            }} />
            <Text>Current Count: {state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;