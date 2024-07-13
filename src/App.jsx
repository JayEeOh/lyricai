import logo from './logo.svg';
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
          <h4>Search for lyrics</h4>
        </header>	
        <header class="form">
          <textarea bind:value={Lyrics}  name="search-for-lyrics" class="search-for-lyrics" cols="30" rows="10" type="text" placeholder="Search for lyrics"/>
        </header>
      </div>
    </body>
    </main>
  );
}

export default App;
