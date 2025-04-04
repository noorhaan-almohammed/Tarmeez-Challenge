import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Post from "./Components/Post";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={"body"}>
        <div class="posts">
          <Post />
          <Post />
          <Post />
        </div>

        <SideBar />
      </div>
    </div>
  );
}

export default App;
