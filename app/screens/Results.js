import React, { Component } from 'react';
import { Text, View, ActivityIndicator, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Container from '../components/commons/Container';
import Title from '../components/commons/Title';
import RoundButton from '../components/commons/RoundButton';
import ResultsStyles from '../assets/styles/screens/ResultsStyles';
import QuizActions from '../actions/QuizActions';
const { container, contentContainerStyle, title, question, questionContainer, icon, button } = ResultsStyles;

export default class Results extends Component {

    constructor() {
        super();
        this.state = {
            questions: null,
            correctAnswers: null,
            incorrectAnswers: null,
            loading: true
        }

        this.title = "Your score is";
        this.buttonText = "PLAY AGAIN";
    }

    componentDidMount() {
        this.params = this.props.navigation.state.params;

        this.setData(this.params.questions).then(() => {
            this.setState({
                loading: false
            });
        })
    }
    
    /**
     * Send question response
     * @param {string} response - User response.
     * @returns {Promise} Promise represents setDataFn ejecution.
     */
    setData(data) {
        let setDataFn = new Promise((resolve, reject) => {
            let correctAnswers = 0;
            let incorrectAnswers = 0;

            for (let i in data) {
                data[i].response ? correctAnswers++ : incorrectAnswers++;
            }

            this.setState({
                questions: data,
                correctAnswers: correctAnswers,
                incorrectAnswers: incorrectAnswers
            }, () => {
                resolve();
            });

        })

        return setDataFn;
    }

    render() {
        let { loading, correctAnswers, questions } = this.state;
        return (
            <Container>
                {
                    loading ?
                        <ActivityIndicator />
                        :
                        <View style={container}>
                            <Title
                                style={title}
                                text={`${this.title} ${correctAnswers} / ${questions.length}`}
                            />
                            <ScrollView
                                contentContainerStyle={contentContainerStyle}
                                showsVerticalScrollIndicator={false}
                            >
                                {
                                    questions.map((val, i) => {
                                        return (
                                            <View
                                                key={i}
                                                style={questionContainer}
                                            >
                                                <Text style={question}>
                                                    {QuizActions.formatQuestion(val.question)}
                                                </Text>
                                                {
                                                    val.response ?
                                                        <Image
                                                            style={icon}
                                                            source={require('../assets/images/icons/checkIcon.png')}
                                                        />
                                                        :
                                                        <Image
                                                            style={icon}
                                                            source={require('../assets/images/icons/xIcon.png')}
                                                        />
                                                }
                                            </View>
                                        );
                                    })
                                }
                            </ScrollView>
                            <RoundButton
                                text={this.buttonText}
                                onPress={() => this.props.navigation.navigate('Quiz')}
                                style={button}
                            />
                        </View>
                }
            </Container>
        );
    }
}