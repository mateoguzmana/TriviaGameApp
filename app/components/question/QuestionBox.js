import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import FlipCard from 'react-native-flip-card';
import QuestionBoxStyles from '../../assets/styles/components/question/QuestionBoxStyles';
import { backgroundImages, defaultBackground } from '../../assets/images/';
import QuizActions from '../../actions/QuizActions';
const { box, contentText } = QuestionBoxStyles;

export default class QuestionBox extends Component {
    
    /**
     * Get background image by question category.
     * @param {string} category - Question category.
     * @returns {Object} Background image.
     */
    getImageByCategory(category) {
        return backgroundImages[QuizActions.getCategory(category)] || defaultBackground;
    }

    render() {
        let { flip, question, category } = this.props;
        return (
            <View style={[box]}>
                <FlipCard
                    flip={this.props.flip}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    clickable={false}
                >
                    <ImageBackground
                        style={box}
                        source={this.getImageByCategory(category)}
                    >
                        <Text style={contentText}>
                            {QuizActions.formatQuestion(question)}
                        </Text>
                    </ImageBackground>
                    <ImageBackground
                        style={box}
                        source={this.getImageByCategory(category)}
                    >
                        <Text style={contentText}>
                            {QuizActions.formatQuestion(question)}
                        </Text>
                    </ImageBackground>
                </FlipCard>
            </View>
        );
    }
}

QuestionBox.propTypes = {
    flip: PropTypes.bool.isRequired,
    question: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
};