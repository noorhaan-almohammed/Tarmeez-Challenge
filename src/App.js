import "./App.css";
import Header from "./Components/Header";
import Tag from "./Components/Tag";
import Post from "./Components/Post";

const posts = [
  { id: 1, title: "Title 1", body: "This is body post 1" },
  { id: 2, title: "Title 2", body: "This is body post 2" },
  { id: 3, title: "Title 3", body: "This is body post 3" },
  { id: 4, title: "Title 4", body: "This is body post 4" },
];

const postsList = posts.map((post) => {
  return <Post key={post.id} title={post.title} body={post.body} />;
});

const tags = [
  {
    id: 1,
    title: "tag 1",
    content: (
      <>
        <h3>Hello</h3>
        <span># # #</span>
      </>
    ),
  },
  {
    id: 2,
    title: "tag 2",
    content: (
      <>
        <h3>Hello</h3>
        <span>world</span>
        <img src="logo192.png" style={{ width: "50px" }} alt="logo"></img>
      </>
    ),
  },
  {
    id: 2,
    title: "tag 2",
    content: (
      <>
        <h3>I love React js</h3>
        <img src="logo192.png" style={{ width: "50px" }} alt="logo"></img>
      </>
    ),
  },
];

const tagList = tags.map((tag) => {
  return (
    <Tag key={tag.id} title={tag.title}>
      {tag.content}
    </Tag>
  );
});
function App() {
  return (
    <div className="App">
      <Header />

      <div className={"body"}>
        <div class="posts">{postsList}</div>

        <div class="side-bar">{tagList}</div>
      </div>
    </div>
  );
}

export default App;
