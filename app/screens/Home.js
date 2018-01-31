import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/commons/Container';
import Title from '../components/commons/Title';
import RoundButton from '../components/commons/RoundButton';
import HomeStyles from '../assets/styles/screens/HomeStyles';
const { text, firstText, secondText } = HomeStyles;

export default class Home extends Component {

    constructor() {
        super();
        this.contentText = {
            title: "Welcome to The Trivia Challenge!",
            textSectionOne: "You will be presented with 10 True or False questions.",
            textSectionTwo: "Can you score 100%?",
            textButton: "BEGIN"
        }
    }

    render() {
        return (
            <Container>
                <Title text={this.contentText.title} />
                <Text style={[text, firstText]}>
                    {this.contentText.textSectionOne}
                </Text>
                <Text style={[text, secondText]}>
                    {this.contentText.textSectionTwo}
                </Text>
                <RoundButton
                    text={this.contentText.textButton} 
                    onPress={() => this.props.navigation.navigate('Quiz')}
                />
            </Container>
        );
    }
}