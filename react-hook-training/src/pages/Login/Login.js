import React from "react";
import { useState } from "react";

export default function Login(props) {
  const [userLogin, setUserLogin] = useState({
    userName: "",
    passWord: "",
  });

  console.log(userLogin);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (
      userLogin.userName === "cyberlearn" &&
      userLogin.passWord === "123456"
    ) {
      // Thành công thi chuyển về trang trước đó
      //   props.history.goBack();
      //Chuyển đến trang chỉ đinh
      // props.history.push("/home");
      //Thay đổi nội dung path tương ứng
      props.history.replace("/home");
      localStorage.setItem("userLogin", JSON.stringify(userLogin));
    } else {
      alert("Login fail");
      return;
    }
  };
  return (
    <div>
      <form className="container" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor>Username</label>
          <input
            type="text"
            name="userName"
            id
            className="form-control"
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor>Password</label>
          <input
            type="text"
            name="passWord"
            id
            className="form-control"
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success">Login</button>
        </div>
      </form>
    </div>
  );
}
