/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TabBarIOS} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'list'
        }
    }


    render() {
        return (
            <TabBarIOS tintColor="#ee735c">
                <TabBarIOS.Item
                    icon={require('./video.png')}
                    selectedIcon={require('./video.png')}
                    selected={this.state.selectedTab === 'list'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'list',
                        });
                    }}>
                    <List/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={require('./recording.png')}
                    selectedIcon={require('./recording.png')}
                    selected={this.state.selectedTab === 'edit'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'edit',
                        });
                    }}>
                    <Edit/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={require('./flux.png')}
                    selectedIcon={require('./flux.png')}
                    selected={this.state.selectedTab === 'account'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'account',
                            presses: this.state.presses + 1
                        });
                    }}>
                    <Account/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

class List extends Component<Props> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>列表页面</Text>
            </View>
        )
    }
}

class Edit extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>制作页面</Text>
            </View>
        )
    }
}

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
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
