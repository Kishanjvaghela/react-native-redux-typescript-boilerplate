import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from "react-redux";

import { getUserList } from "./actions";
import styles from './style';
export interface Props {
    navigation: any;
    getUserList: Function;
    data: [];
}
export interface State { }

class HomeScreen extends Component<Props, State> {

    componentDidMount() {
        this.props.getUserList();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>This is title</Text>
                <Text>{this.props.data.length}</Text>
            </View>
        );
    }
}

function bindAction(dispatch) {
    return {
        getUserList: () => dispatch(getUserList()),
    };
}

const mapStateToProps = state => ({
    data: state.homeReducer.data,
    isLoading: [],
});
export default connect(mapStateToProps, bindAction)(HomeScreen);
