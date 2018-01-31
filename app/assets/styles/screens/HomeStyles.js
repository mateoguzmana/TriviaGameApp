import { StyleSheet } from 'react-native';
import { appFont } from '../GlobalStyles';

export default HomeStyles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: appFont,
        textAlign: 'center',
        color: '#333333',
    },
    firstText: {
        marginTop: 80
    },
    secondText: {
        marginBottom: 120,
        marginTop: 100
    },
    button: {
        marginTop: 50,
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    buttonText: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 20,
        fontWeight: 'bold'
    }
});