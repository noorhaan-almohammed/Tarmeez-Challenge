function Title( prop ) {
  return <h2>{prop.postTitle}</h2>;
}

function Body({ postBody }) {
  return <p>{postBody}</p>;
}

export default function Post({ title="no title", body="no body" }) {
  return (
    <div className={"post"}>
      <Title postTitle={title} />
      <hr />
      <Body postBody={body} />
    </div>
  );
}
