import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Account extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>账户页面</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

module.exports = Account