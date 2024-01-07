import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Resources:</h1>
        <body>
          <div class="container">
            <div class="row">
              <div class="col-sm">
                Default sites:<br></br>
                <a href="url">link text</a>
              </div>
              <div class="col-sm">
                Specific sites:<br></br>
                <a href="url">link text</a>
              </div>
              <div class="col-sm">
                Places to visit with discounts:<br></br>
                <a href="url">link text</a>
              </div>
            </div>
          </div>
        </body>
      </header>
      <footer>©2024 AishSunbae | All Rights Reserved</footer>
    </div>
  );
}

export default App;
