import * as React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {ListView} from '../../components/organisms';
import {Avatar} from '../../components/atoms';
import {getUserList} from './actions';
import strings from '../../res/i18n';
import styles from './style';
export interface Props {
  navigation: any;
  getUserList: Function;
  data: [];
}
export interface State {}

class HomeScreen extends React.Component<Props, State> {
  componentDidMount() {
    this.props.getUserList();
  }

  _onPress = item => {};
  _renderItem = ({item}) => {
    const name = `${item.name.title}, ${item.name.first} ${item.name.last}`;
    return (
      <TouchableOpacity
        onPress={() => this._onPress(item)}
        style={styles.userItem}>
        <Avatar size={50} source={{uri: item.picture.medium}} />
        <View style={styles.userDetail}>
          <Text>{name}</Text>
          <Text>{item.name.first}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{strings.appName}</Text>
        <Text>{this.props.data.length}</Text>
        <ListView
          isLoading={this.props.isLoading}
          style={styles.userList}
          data={this.props.data}
          emptyTitle={'No User Data'}
          renderItem={this._renderItem}
        />
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
  isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeScreen);
