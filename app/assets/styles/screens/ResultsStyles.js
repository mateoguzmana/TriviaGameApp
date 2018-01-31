import { StyleSheet } from 'react-native';
import { width } from '../GlobalStyles';

const ResultsStyles = StyleSheet.create({
    container: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginBottom: 0
    },
    question: {
        width: width * 0.71,
        color: '#333333',
        marginBottom: 10,
        fontSize: 12.1
    },
    questionContainer: { 
        flexDirection: 'row' 
    },
    icon: {
        width: width * 0.04,
        height: width * 0.04,
        marginLeft: 20
    },
    button: {
        marginBottom: 30
    }
});

export default ResultsStyles;
