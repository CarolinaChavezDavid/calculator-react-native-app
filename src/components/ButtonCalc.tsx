import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { lightGray, styles } from '../theme/AppTheme';


interface ButtomProps {
    text: string,
    color?: string,
    width?: boolean,
    action: ( newNumber: string ) => void
}

export const ButtonCalc = ({text, color = "#9B9B9B", width = false, action} : ButtomProps) => {
  return (
    <TouchableOpacity
        onPress={ () => action(text) }>
        <View style={
            {
            ...styles.button,
            backgroundColor: color,
            width: ( width ) ? 180 : 80
        }
    }>
            <Text style = {
                {
                ...styles.buttonText,   
                color: ( color === lightGray ) ? 'black' : 'white'
                }
            }> { text } </Text>
        </View>

    </TouchableOpacity>
    
  )
}
