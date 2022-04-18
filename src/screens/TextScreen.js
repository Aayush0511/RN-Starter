import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    return(
        <View>
            <Text>Enter your name</Text>
            <TextInput
                style = {styles.input}
                autoCapitalize = 'none'
                autoCorrect = {false}
                onChangeText = {(newValue) => setName(newValue)} />
            <Text>My name is {name}</Text>
            <Text>Enter password</Text>
            <TextInput
                style = {styles.input}
                autoCapitalize = 'none'
                autoCorrect = {false}
                onChangeText = {(newValue) => setPassword(newValue)} />
            { password.length <= 5 ? <Text>Password should be longer than 5 characters</Text> : null }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5
    }
});

export default TextScreen;