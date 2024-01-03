import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponet';
import FormReact from './example/form';


/**
 * 2 component:
 *  1. class cmponent
 *  2. function component (
 *  + function App() {}
 *  + cont App = () => {}
 *  ,arrow)
 * Compponent là 1 function và class
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello on the React.js (Practice)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

         {/* <MyComponent/> */}

           {/* <MyComponent></MyComponent> */}

        <FormReact></FormReact>

      </header>
    </div>
  );
}

export default App;
