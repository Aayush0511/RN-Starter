import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return(
        <View style = {styles.viewMainStyle}>
            <View style = {styles.viewOneStyle} />
            <View style = {styles.viewTwoStyle} />
            <View style = {styles.viewThreeStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewMainStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200
    },
    viewOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'blue'
    }
});

export default BoxScreen;