import { StyleSheet } from "react-native";

export const orangeColor = '#FF9427'
export const darkGray = '#2D2D2D'
export const lightGray = '#9B9B9B'

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black'
    },
    result: {
        fontSize: 60,
        color: 'white',
        textAlign: 'right',
        marginBottom: 10
    },
    resultSmall:{
        fontSize: 30,
        color: 'rgba(255, 255, 255, 0.5)',
        textAlign: 'right',
    },

    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },

    button: {
        height: 80,
        width: 80,
        backgroundColor: '#9B9B9B',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    }, 
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }

})