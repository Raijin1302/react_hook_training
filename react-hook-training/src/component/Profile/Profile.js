import { Redirect } from "react-router-dom";

export default function Profile(props) {
  if (localStorage.getItem("userLogin")) {
    return (
      <div>
        <h3>Đây là trang profile</h3>
      </div>
    );
  } else {
    alert("Vui lòng đăng nhập để vào trang");
    return <Redirect to="/login" />;
  }
}
