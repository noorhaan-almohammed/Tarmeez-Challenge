function Title() {
  return <h2>This is the post title</h2>;
}

function Body() {
  return <p>This is the post body</p>;
}

export default function Post() {
  return (
    <div className={"post"}>
      <Title />
      <hr />
      <Body />
    </div>
  );
}

