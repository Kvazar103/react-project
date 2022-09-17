import logo from './logo.svg';
import './App.css';
import {simpsons} from "./components/Simpsons";
import Simpson from "./components/Simpson";

function App() {
  return (
    <div>
      {simpsons.map(value => (<Simpson item={value}/>))}
    </div>
  );
}

export default App;
