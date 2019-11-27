import React from 'react';
import { FlatList, FlatListProps } from 'react-native';
import { EmptyView } from '../../molecules';
import styles from './styles';

export interface Props {
    renderItem: Function;
    data: [];
    emptyTitle: string
}

export default class ListView extends React.Component<FlatListProps<any>> {
    render() {
        const { renderItem, data, emptyTitle, ...restProps } = this.props
        return (
            <FlatList
                ListEmptyComponent={<EmptyView title={emptyTitle} />}
                keyExtractor={(item, index) => index + ""}
                data={data}
                renderItem={renderItem}
                {...restProps}
            />
        );
    }
}