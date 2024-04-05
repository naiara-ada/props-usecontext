import {Link} from 'react-router-dom';
import { useCalculator } from './CalculatorProvider.jsx';

function Result (){
    const {numbers, resetNumber, sumNumber} = useCalculator();

   
    
    return(
        <div className='result'>
            <h1>Resultado</h1>
            <p>El resultado de la suma es: {sumNumber()}</p>
            <p>Números Pulsados: {numbers.join(', ')} </p>            
            <button onClick={resetNumber} className='btnReset'>Reset</button>
            <br/>
            <div className='link'>
                 <Link to='/'>Calculadora</Link>
            </div>
        </div>
    )
}

export default Result   