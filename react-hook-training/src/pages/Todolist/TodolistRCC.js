import React, { Component } from "react";
import axios, { Axios } from "axios";

export default class TodolistRCC extends Component {
  state = {
    taskList: [],
    values: {
      taskName: "",
    },
    error: {
      taskName: "",
    },
  };

  getTaskList = () => {
    // let promise = axios({
    //   method: "GET",
    //   url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
    //   headers: {
    //     TokenCybersoft:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0",
    //   },
    // });

    // promise.then((result) => {
    //   console.log(result.data);
    //   console.log("Thành công");
    // });

    // promise.catch((err) => {
    //   console.log("Thất bại");
    //   console.log(err.response.data);
    // });

    let promise = axios({
      method: "GET",
      url: "https://the-sneaker-database.p.rapidapi.com/sneakers",
      params: { limit: "10" },
      headers: {
        "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
        "x-rapidapi-key": "20e59a1fbamshe3ccadeeeb636fcp1cea81jsn0fe0a70fe059",
      },
    });

    promise.then((response) => {
      console.log("Thành công");
      console.log(response.data);
      this.setState({
        taskList: response.data.results,
      });
    });

    promise.catch((err) => {
      console.log("Thành thụ");
      console.log(err.response.data);
    });
  };

  renderTaskToDo = () => {
    return this.state.taskList.map((item) => {
      return (
        <li className="list-group-item" key={item.id}>
          <div className="todo-indicator bg-success" />
          <div className="widget-content p-0">
            <div className="widget-content-wrapper">
              <div className="widget-content-left mr-2">
                <div className="custom-checkbox custom-control">
                  <input
                    className="custom-control-input"
                    id="exampleCustomCheckbox3"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="exampleCustomCheckbox3"
                  >
                    &nbsp;
                  </label>
                </div>
              </div>
              <div className="widget-content-left flex2">
                <div className="widget-heading">{item.name}</div>
                <div className="widget-subheading">{item.brand}</div>
                <div className="widget-subheading">{item.colorway}</div>
              </div>
              <div className="widget-content-right">
                {" "}
                <button className="border-0 btn-transition btn btn-outline-success">
                  {" "}
                  <i className="fa fa-check" />
                </button>{" "}
                <button className="border-0 btn-transition btn btn-outline-danger">
                  {" "}
                  <i className="fa fa-trash" />{" "}
                </button>{" "}
              </div>
            </div>
          </div>
        </li>
      );
    });
  };

  //Hàm tự động thực thi sau khi component được render
  componentDidMount() {
    this.getTaskList();
  }

  handleChange = (e) => {
    let { value, name } = e.target;
    console.log(value, name);
    let newValues = { ...this.state.values };
    newValues = { ...newValues, [name]: value };
    let newErr = { ...this.state.error };

    this.setState({
      ...this.state,
      values: newValues,
      error: newErr,
    });
  };

  addTask = (e) => {
    e.preventDefault();
    let promise = Axios({
      url: "https://the-sneaker-database.p.rapidapi.com/sneakers",
      method: "POST",
      data: { taskName: this.state.values.taskName },
    });

    //Nếu thành công
    promise.then((result) => {
      console.log(result);
    });
    promise.catch((err) => {
      console.log("Thành thụ", err);
    });
  };
  render() {
    return (
      <form
        className="row d-flex justify-content-center container"
        onSubmit={this.addTask}
      >
        {/* <div>
          <button
            className="btn btn-success"
            onClick={() => {
              this.getTaskList();
            }}
          >
            Get task list
          </button>
        </div> */}
        <div className="col-md-8">
          <div className="card-hover-shadow-2x mb-3 card">
            <div className="card-header-tab card-header">
              <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                <i className="fa fa-tasks" />
                &nbsp;Task Lists
              </div>
            </div>
            <div className="scroll-area-sm">
              <perfect-scrollbar className="ps-show-limits">
                <div style={{ position: "static" }} className="ps ps--active-y">
                  <div className="ps-content">
                    <ul className=" list-group list-group-flush">
                      {this.renderTaskToDo()}
                    </ul>
                  </div>
                </div>
              </perfect-scrollbar>
            </div>
            <div className="d-block text-right card-footer">
              <div className="form-group">
                <label htmlFor />
                <input
                  type="text"
                  className="form-control"
                  name="taskName"
                  id="taskName"
                  placeholder="Enter an activity...."
                  onChange={this.handleChange}
                />
                <small id="helpId" className="form-text text-muted">
                  Help text
                </small>
              </div>

              <p className="text text-danger">{this.state.error.taskName}</p>
              <button className="mr-2 btn btn-link btn-sm">Cancel</button>
              <button className="btn btn-primary" onClick={this.addTask}>
                Add Task
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
