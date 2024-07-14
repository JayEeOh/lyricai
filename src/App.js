import logo from './logo.png';
import './App.css';

function App() {
  let Lyrics = "";
  return (
    <main>
    <body>
      <div className="App">
        <header class="App-header">
          <img src="{logo}" alt="Logo" />
          <h1>LyricAI</h1>
          <h6>Search with lyrics</h6>
        </header>	
        <header class="form">
          <textarea bind:value={Lyrics} name="search-for-lyrics" class="search-for-lyrics" cols="30" rows="10" type="text"/>
        </header>
        <h6>{Lyrics}</h6>
      </div>
    </body>
    </main>
  );
}

export default App;
