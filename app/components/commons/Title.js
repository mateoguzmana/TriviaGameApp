import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import TitleStyles from '../../assets/styles/components/commons/TitleStyles';

export default class Title extends Component {
    render() {
        return (
            <Text style={[TitleStyles.title, this.props.style]}>
                {this.props.text}
            </Text>
        );
    }
}

Title.propTypes = {
    text: PropTypes.string
};

Title.defaultProps = {
    text: ''
};