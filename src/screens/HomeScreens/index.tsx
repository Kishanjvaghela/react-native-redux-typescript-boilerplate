import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { ListView } from '../../components/organisms';

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

    _onPress = (item) => {

    }
    _renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this._onPress(item)}>
            <Text>{item.name.first}</Text>
        </TouchableOpacity>
    );

    render() {
        return (
            <View style={styles.container}>
                <Text>This is title</Text>
                <Text>{this.props.data.length}</Text>
                <ListView
                    data={this.props.data}
                    emptyTitle={'No User Data'}
                    renderItem={this._renderItem} />
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
