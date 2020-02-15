import * as React from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {EmptyView} from '../../molecules';
import {Loader} from '../../atoms';
import styles from './styles';

export interface Props {
  renderItem: Function;
  data: [];
  emptyTitle: string;
  isLoading: boolean;
}

export default class ListView extends React.Component<FlatListProps<any>> {
  render() {
    const {isLoading, renderItem, data, emptyTitle, ...restProps} = this.props;
    if (isLoading) {
      return <Loader />;
    }
    return (
      <FlatList
        ListEmptyComponent={<EmptyView title={emptyTitle} />}
        keyExtractor={(item, index) => index + ''}
        data={data}
        renderItem={renderItem}
        {...restProps}
      />
    );
  }
}
