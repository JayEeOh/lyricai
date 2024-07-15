import React from 'react'; 
import './App.css';

function App() {
  let Lyrics = "";
  return (
    <main>
    <body>
      <div className="App">
        <header class="App-header">
          <h1>LyricAI</h1>
          <h6>Search with lyrics</h6>
        </header>	
        <header class="form">
          <textarea bind:value={Lyrics}  class="search-for-lyrics" cols="30" rows="10" type="text"/>
          <button on:click={() => console.log(Lyrics)}>

          </button>
        </header>
        <h6>{Lyrics}</h6>
      </div>
    </body>
    </main>
  );
}

export default App;
