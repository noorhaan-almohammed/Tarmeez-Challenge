import "./App.css";
import Header from "./Components/Header";
import Tag from "./Components/Tag";
import Post from "./Components/Post";

function App() {
  return (
    <div className="App">
      <Header />

      <div className={"body"}>
        <div class="posts">
          <Post title="Title 1" body="This is body post 1" />
          <Post title="Title 2" body="This is body post 2" />
          <Post title="Title 3" body="This is body post 3" />
          <Post title="Title 4" body="This is body post 4" />
          <Post />
        </div>

        <div class="side-bar">
          <Tag>
            <h3>Hello</h3>
            <span># # #</span>
          </Tag>
          <Tag>
            <h3>Hello</h3>
            <span>world</span>
            <img src="logo192.png" style={{ width: "50px" }} alt="logo"></img>
          </Tag>
          <Tag>
            <h3>I love React js</h3>
            <img src="logo192.png" style={{ width: "50px" }} alt="logo"></img>
          </Tag>
        </div>
      </div>
    </div>
  );
}

export default App;
