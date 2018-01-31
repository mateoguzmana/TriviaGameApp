import { StyleSheet } from 'react-native';
import { width } from '../../GlobalStyles';

export const ContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subContainer: {
        width: width * 0.85,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const GradientColors = [
    "rgba(49, 225, 126, 0.9);",
    "rgba(49, 225, 126, 0.7);",
    "rgba(49, 225, 126, 0.5);",
    "rgba(49, 225, 126, 0.7);",
    "rgba(49, 225, 126, 0.9);"
];
