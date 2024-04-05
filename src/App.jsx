import './App.css';
import { CalculatorProvider } from './components/CalculatorProvider.jsx';
import RoutesApp from './RoutesApp.jsx'

function App() {
  return (
    <CalculatorProvider>
      
      <RoutesApp />
    </CalculatorProvider>

  );
}

export default App;
