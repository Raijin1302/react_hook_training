export default function PageNotFound(props) {
  return (
    <div>
      <h1>Không tìm thấy trang nào cả {props.match.url}</h1>
    </div>
  );
}
