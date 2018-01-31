import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import QuestionButtonsStyles from '../../assets/styles/components/question/QuestionButtonsStyles';
const { container, button, greenButton, redButton, icon } = QuestionButtonsStyles;

export default class QuestionButtons extends Component {
    render() {
        return (
            <View style={container}>
                <TouchableOpacity
                    style={[button, greenButton]}
                    onPress={() => this.props.onPress("True")}
                >
                    <Image
                        style={icon}
                        source={require('../../assets/images/icons/checkIcon.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[button, redButton]}
                    onPress={() => this.props.onPress("False")}
                >
                    <Image
                        style={icon}
                        source={require('../../assets/images/icons/xIcon.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

QuestionButtons.propTypes = {
    onPress: PropTypes.func.isRequired
};