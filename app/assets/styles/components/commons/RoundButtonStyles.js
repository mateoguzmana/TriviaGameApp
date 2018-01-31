import { StyleSheet } from 'react-native';

export const RoundButtonStyles = StyleSheet.create({
    button: {
        marginTop: 30,
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

export const ButtonColors = [
    'rgba(238, 255, 223, 0.7);', 
    'rgba(238, 255, 223, 0.3);'
];