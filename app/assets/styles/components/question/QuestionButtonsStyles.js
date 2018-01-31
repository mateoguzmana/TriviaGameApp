import { StyleSheet } from 'react-native';

const QuestionButtonsStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: 80,
        width: 80,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 80,
        borderWidth: 2
    },
    greenButton: {
        backgroundColor: 'transparent',
        borderColor: 'green'
    },
    redButton: {
        backgroundColor: 'transparent',
        borderColor: 'red'
    },
    icon: {
        width: 45,
        height: 45
    }
});

export default QuestionButtonsStyles;
