import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar'

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
