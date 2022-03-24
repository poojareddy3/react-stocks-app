import './App.css';
import './components/Stocks.css'
import Stocks from './components/Stocks'

function App() {
  return (
    <div className="App">
       <div class="title">
         <h1>STOCKS</h1>
       <Stocks />
       <input type="text" placeholder="Search"></input>
     </div>
    </div>
  );
}

export default App;
