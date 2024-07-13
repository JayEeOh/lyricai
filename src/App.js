import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
    <body>
      <div className="App">
        <header class="App-header">
          <img src="./logo.svg" alt="Logo" />
          <h1>LyricAI</h1>
          <h2>Search for lyrics</h2>
        </header>	
        <header class="form">
          <textarea name="lyrics" class="lyrics"></textarea>
        </header>
      </div>
    </body>
    </main>
  );
}

export default App;
