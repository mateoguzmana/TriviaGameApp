import { StyleSheet } from 'react-native';
import { appFont, width, height } from '../../GlobalStyles';

const QuestionBoxStyles = StyleSheet.create({
    box: {
        width: width * 0.85,
        height: height * 0.3,
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: appFont,
        textAlign: 'center',
        margin: 10,
        marginTop: 0
    }
});

export default QuestionBoxStyles;
