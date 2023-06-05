import React, { useRef, useState } from 'react'


enum Operators {
    sum, substract, multiply, divide
}

export const useCalculator = () => {
    const [ number, setNumber ] = useState('100');
    const [ lastNumber, setLastNumber ] = useState('100');

    const lastOperation = useRef<Operators>()

    const clean = () => {
        setNumber('0')
        setLastNumber('0')
    }

    const addNewNumber = ( newNumber: string) => {
        if( number.includes('.') && newNumber ===  '.' ) return; 
        

        if(number.startsWith('0') || number.startsWith('-0')){
            if(newNumber == '.'){
                setNumber( number + newNumber );
            } else if(newNumber === '0' && number.includes('.')){
                setNumber( number + newNumber );
            } else if(newNumber != '0' && !number.includes('.')){
                setNumber(newNumber);
            } else if( newNumber === '0' && !newNumber.includes('.')){
                setNumber(number);
            } else {
                setNumber( number + newNumber );
            }
        } else {
            setNumber( number + newNumber );
        }
    }

    const positiveNegative = () => {
        if(number.includes('-')){
            setNumber( number.replace('-', ''));
        }else{
            setNumber('-' + number.replace('-', ''))
        }
    }

    const buttonDelete = () => {
        let negative = ''
        let numberTemp = number

        if(number.includes('-')) {
            negative = '-'
            numberTemp = number.substring(1);
        }
        if(number.length > 1) {
            setNumber(negative + numberTemp.slice(0, -1));
        }else {
            setNumber('0')
        }
    }

    const changeLastNumber = () => {
        if( number.endsWith('.') ) {
            setLastNumber ( number.slice(0, -1));
        }else{
            setLastNumber( number );
        }
        setNumber('0')
    }

    const buttonDivide = () => {
        changeLastNumber();
        lastOperation.current = Operators.divide;

    }

    const buttonMultiply = () => {
        changeLastNumber();
        lastOperation.current = Operators.multiply;


    }

    const buttonSum = () => {
        changeLastNumber();
        lastOperation.current = Operators.sum;

    }

    const buttonSubstract = () => {
        changeLastNumber();
        lastOperation.current = Operators.substract;

    }

    const calculate = () => {
        const num1 = Number( number );
        const num2 = Number( lastNumber );

        switch( lastOperation.current ) {
            case Operators.sum:
                setNumber( `${num1 + num2}` );
                break;

            case Operators.substract:
                setNumber( `${num2 - num1}` );
                break;
            
            case Operators.multiply:
                setNumber( `${num1 * num2}` );
                break;

            case Operators.divide:
                setNumber( `${num2 / num1}` );
                break;
                
        }
        
        setLastNumber('0')
    }

    return { 
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
    }

}
