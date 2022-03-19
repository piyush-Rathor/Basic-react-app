import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import AddPost from "./AddPost";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/post" component={Post} exact/>
        <Route path="/add-post" component={AddPost} exact/>
      </Switch>
    </Router>
  );
}

export default App;
