export default function CusttomTag(props) {
  return (
    <>
    {/* ternary operator if condetion */}
      {props.children == null ? (
        <></>
      ) : (
        <button className="tag-button">
          <h3>{props.title}</h3>
          {props.children}
        </button>
      )}
    </>
  );
}
