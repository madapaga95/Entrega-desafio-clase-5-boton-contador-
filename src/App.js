{ NavBar } from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer';
import { Counter } from './Components/counter/Counter';
import { ItemCounter } from './Components/counter/ItemCounter';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (    
    <>
    <NavBar/>
    <ItemListContainer/>
    <Counter/>
    <ItemCounter
      stock={10}
      initial={2}
    />
    </>    
  );
}

export default App;
export default App; 