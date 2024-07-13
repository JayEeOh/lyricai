import logo from '../public/trace.svg';
import './App.css';

function App() {
  return (
    <main>
    <body>
      <div className="App">
        <header class="App-header">
          <h1>LyricAI</h1>
          <h2>Search for lyrics</h2>
        </header>	
        <header class="form">
          <textarea name="search-for-lyrics" class="search-for-lyrics" cols="30" rows="10" type="text" placeholder="Search for lyrics"/>
        </header>
      </div>
    </body>
    </main>
  );
}

export default App;
