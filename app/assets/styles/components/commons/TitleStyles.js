import { StyleSheet } from 'react-native';
import { appFont, height } from '../../GlobalStyles';

const TitleStyles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontFamily: appFont,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 0,
        marginBottom: 30,
        height: height * 0.1
    }
});

export default TitleStyles;
