/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {
            hit: false,
            times: 0
        }
    }

    timesReset = () => {
        this.setState({
            times: 0
        })
        console.log(1)
    }

    willHit = () => {
        this.setState({
            hit: !this.state.hit
        })
    }

    timesPlus = () => {
        let times = this.state.times
        times += 3
        this.setState({
            times: times
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {/* 给子组件传递属性和方法 */}
                {
                    this.state.hit
                        ? <Son times={this.state.times} timesReset={this.timesReset}/>
                        : null
                }
                <Text style={styles.welcome} onPress={this.timesReset}>老子心情好 放你一马</Text>
                <Text style={styles.instructions} onPress={this.willHit}>到底揍不揍</Text>
                <Text style={styles.instructions} >就揍了你{this.state.times}次而已</Text>
                <Text style={styles.instructions} onPress={this.timesPlus}>不听话 在揍你3次</Text>
            </View>
        );
    }
}

class Son extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {
            times: this.props.times
        }
    }

    componentWillReceiveProps(props) {
        console.log(this.props)
        console.log('child', 'componentWillReceiveProps')
        this.setState({
            times: props.times
        })
    }

    timesReset = () => {
        // 调用父组件传递方法
        this.props.timesReset()
        console.log(this.props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>儿子：有本事揍我啊</Text>
                <Text style={styles.instructions}>你居然揍我 {this.state.times} 次</Text>
                <Text style={styles.instructions} onPress={this.timesReset}>信不信我亲亲你</Text>
            </View>
        );
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
