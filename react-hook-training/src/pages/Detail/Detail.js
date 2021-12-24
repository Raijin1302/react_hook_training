import React from "react";

export default function Detail(props) {
  console.log(props);
  return (
    <div>
      <h3>Giá trị tham số {props.match.params.id}</h3>
      <h3>Path name hiện tại {props.match.path}</h3>
    </div>
  );
}
