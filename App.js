/*
* APP 基本框架
* */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TabBarIOS} from 'react-native';
const List = require('./app/creation/index')
const Edit = require('./app/edit/index')
const Account = require('./app/account/index')

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

