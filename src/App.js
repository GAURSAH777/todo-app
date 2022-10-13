// import logo from './logo.svg';
import './App.css';
import Calculator from './components/calculator/Calculator';
// import { FirstComponent } from './components/learning-examples/FirstComponent';
// import SecondComponent from './components/learning-examples/SecondComponent';
// import  Counter  from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      {/* My hello world */}
      {/* <FirstComponent /> */}
      {/* <SecondComponent /> */}
      {/* <Counter /> */}
      <Calculator by={1} />
      <Calculator by={5} />
      <Calculator by={10} />
    </div>
  );
}

export default App;
