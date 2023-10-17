import logo from './logo.svg';
import './App.css';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
        <BusinessList/>
      </header>
    </div>
  );
}

export default App;
