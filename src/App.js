import logo from './logo.svg';
import './App.css';
import User from './User'
import Members from './Members'
function App() {
  function getData(){
    alert("Hello Harsh")
  }
  return (
    <div className="App">
      <h1><User data={getData}/></h1>
      <Members data={getData}/>
    </div>
  );
}

export default App;
