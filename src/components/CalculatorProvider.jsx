import React, {createContext, useState, useContext} from "react";


const CalculatorContext = createContext();

export const CalculatorProvider = ({children}) => {
    const [numbers, setNumbers] = useState([]);
    const [selectedNumber, setSelectedNumber] = useState('');
    


    const addNumber = (number) => {
       setNumbers([...numbers, number]);
       setSelectedNumber(number);
       
    }

    const sumNumber = () => {
        const sum = numbers.reduce((total, num) => total + num, 0);
        return sum;
        
    }
    const resetNumber = () => {
        setNumbers([]);
        setSelectedNumber('')
    };
    return (
        <CalculatorContext.Provider value={{numbers, addNumber, sumNumber, resetNumber, selectedNumber}}>
            {children}
        </CalculatorContext.Provider>
    );
}

export const useCalculator = () => useContext(CalculatorContext)

