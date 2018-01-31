import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import Container from '../components/commons/Container';
import Title from '../components/commons/Title';
import QuestionBox from '../components/question/QuestionBox';
import QuestionButtons from '../components/question/QuestionButtons';
import { QuizStyles, GradientColors } from '../assets/styles/screens/QuizStyles';
import QuizActions from '../actions/QuizActions';
const { footer } = QuizStyles;

export default class Quiz extends Component {

    constructor() {
        super();
        this.state = {
            currentQuestion: 0,
            questions: null,
            loading: true,
            flip: false
        }
    }

    componentDidMount() {
        this.getData();
    }

    /**
     * Get API data.
     */
    getData() {
        QuizActions.getData((data) => {
            this.setState({
                questions: data,
                loading: false
            });
        });
    }

    /**
     * Send question response.
     * @param {string} response - User response.
     */
    sendResponse(response) {
        let nextQuestion;
        let { questions, currentQuestion, flip } = this.state;

        questions[currentQuestion].response = (response == questions[currentQuestion].correct_answer);

        if ((currentQuestion + 1) == questions.length) {
            this.props.navigation.navigate("Results", { questions: questions });
        } else {
            nextQuestion = currentQuestion + 1;

            this.setState({
                flip: !flip,
                currentQuestion: nextQuestion
            });
        }
    }

    render() {
        let { questions, currentQuestion, flip, loading } = this.state;
        return (
            loading ?
                <Container colors={GradientColors["Default"]}>
                    <ActivityIndicator />
                </Container>
                :
                <Container colors={GradientColors[QuizActions.getCategory(questions[currentQuestion].category)] || GradientColors["Default"]}>
                    <View>
                        <Title text={questions[currentQuestion].category} />
                        <QuestionBox
                            question={questions[currentQuestion].question}
                            category={questions[currentQuestion].category}
                            flip={flip}
                        />
                        <QuestionButtons onPress={(response) => this.sendResponse(response)} />
                        <Text style={footer}>
                            {`${currentQuestion + 1} of ${questions.length}`}
                        </Text>
                    </View>
                </Container>
        );
    }
}