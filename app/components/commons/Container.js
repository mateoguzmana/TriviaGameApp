import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { ContainerStyles, GradientColors } from '../../assets/styles/components/commons/ContainerStyles';
const { container, subContainer } = ContainerStyles;

export default class Container extends Component {
    render() {
        return (
            <LinearGradient
                colors={this.props.colors || GradientColors}
                style={container}
            >
                <View style={subContainer}>
                    {this.props.children}
                </View>
            </LinearGradient>
        );
    }
}

Container.propTypes = {
    colors: PropTypes.array
};

Container.defaultProps = {
    colors: null
};