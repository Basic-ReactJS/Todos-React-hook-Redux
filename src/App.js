import "./App.css";
import PageTodo from "pages/index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <PageTodo></PageTodo>
      </div>
    </Router>
  );
}

export default App;
