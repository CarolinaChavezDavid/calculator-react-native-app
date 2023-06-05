import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { darkGray, orangeColor, styles } from '../theme/AppTheme';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
     const { 
        lastNumber, 
        number, 
        clean, 
        positiveNegative, 
        buttonDelete, 
        buttonDivide, 
        addNewNumber,
        buttonMultiply,
        buttonSubstract,
        buttonSum,
        calculate
    } = useCalculator();

  return (
    <View style= { styles.container }>
        {
            (lastNumber !== '0') && (
                <Text style = { styles.resultSmall }>{ lastNumber }</Text>
            )
         }
     
      <Text 
      style = { styles.result }
      numberOfLines = { 1 }
      adjustsFontSizeToFit>{ number }</Text>

      <View style = {styles.row}>
        <ButtonCalc text= {'AC'} action={ clean }/>
        <ButtonCalc text= {'+/-'} action={ positiveNegative }/>
        <ButtonCalc text= {'del'} action={ buttonDelete } />
        <ButtonCalc text= {'/'} color= { orangeColor } action={ buttonDivide }/>
      </View>

      <View style = {styles.row}>
        <ButtonCalc text= {'7'} color= { darkGray } action= { addNewNumber }/>
        <ButtonCalc text= {'8'} color= { darkGray } action= { addNewNumber }/>
        <ButtonCalc text= {'9'} color= { darkGray } action= { addNewNumber }/>
        <ButtonCalc text= {'x'} color= { orangeColor } action={ buttonMultiply }/>
      </View>

      <View style = {styles.row}>
        <ButtonCalc text= {'4'} color= { darkGray } action= { addNewNumber }/>
        <ButtonCalc text= {'5'} color= { darkGray } action= { addNewNumber }/>
        <ButtonCalc text= {'6'} color= { darkGray } action= { addNewNumber }/>
        <ButtonCalc text= {'-'} color= { orangeColor } action={ buttonSubstract }/>
      </View>

      <View style = {styles.row}>
        <ButtonCalc text= {'1'} color= { darkGray } action= { addNewNumber }/>
        <ButtonCalc text= {'2'} color= { darkGray } action= { addNewNumber }/>
        <ButtonCalc text= {'3'} color= { darkGray } action= { addNewNumber }/>
        <ButtonCalc text= {'+'} color= { orangeColor } action={ buttonSum }/>
      </View>

      <View style = {styles.row}>
        <ButtonCalc text= {'0'} color= { darkGray } width action= { addNewNumber }/>
        <ButtonCalc text= {'.'} color= { darkGray } action={ addNewNumber }/>
        <ButtonCalc text= {'='} color= { orangeColor } action={ calculate }/>
      </View>

    </View>
  )
}

