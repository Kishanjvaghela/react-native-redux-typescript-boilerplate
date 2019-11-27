import React from 'react';
import { Image, ImageProps } from 'react-native';
import styles from './styles';

export interface AvatarProps {
    size: number;
}

export default class Avatar extends React.Component<ImageProps, AvatarProps> {
    render() {
        const { size } = this.props;
        return (
            <Image
                style={{ width: size, height: size, borderRadius: size / 2 }}
                source={this.props.source} />
        );
    }
}