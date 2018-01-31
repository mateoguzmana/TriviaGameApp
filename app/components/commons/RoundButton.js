import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { RoundButtonStyles, ButtonColors } from '../../assets/styles/components/commons/RoundButtonStyles';
const { button, buttonText } = RoundButtonStyles;

export default class RoundButton extends Component {
    render() {
        return (
            <TouchableOpacity {...this.props}>
                <LinearGradient
                    colors={ButtonColors}
                    style={button}
                >
                    <Text style={buttonText}>
                        {this.props.text}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

RoundButton.propTypes = {
    text: PropTypes.string
};

RoundButton.defaultProps = {
    text: ''
};