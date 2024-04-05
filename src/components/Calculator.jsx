import {Link} from 'react-router-dom';
import { useCalculator } from './CalculatorProvider.jsx';

function Calculator (){

   const { addNumber,  selectedNumber, numbers } = useCalculator();

   const handleButtonClick =(number) => {
    addNumber(number);
   }

   console.log('Suma:', numbers)

return(
    <div className='calculator'>
        <h1>Calculator</h1>
    <div>Número actual: {selectedNumber}</div>
    <div className='buttons'>
    {[0,1,2,3,4,5,6,7,8,9].map((number) => (
    <button key={number} onClick={() => handleButtonClick(number)}>
        {number}
    </button>

    )
    )}
</div>  
    <div className='link'>
     <Link to='/result'>Resultado</Link>
    </div>
    </div>
)
}

export default Calculator