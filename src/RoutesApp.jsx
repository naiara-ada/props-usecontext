import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Calculator from './components/Calculator.jsx';
import Result from './components/Result.jsx'

function RoutesApp (){
    return(
        <Router>
              <Routes>
                <Route path="/" element={<Calculator />} />
                <Route path="/result" element={<Result />} />                
              </Routes>
        </Router>
    )
    }
    export default RoutesApp