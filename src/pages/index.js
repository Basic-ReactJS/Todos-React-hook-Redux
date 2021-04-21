import React from "react";
import { Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import logo from "asset/images/line sticker of the day.png";
import useStylesHome from "hook/makeHome";
import "asset/styles/style.css";
import "asset/styles/form.css";

import Home from "./home";
import NewTask from "./newTask";

function PageTodo() {
  const classesHome = useStylesHome();

  return (
    <div>
      <div className="header">
        <div className="img-title">
          <img src={logo} alt="Logo" />
        </div>
        <div className="title-content home">
          <Link to="/">
            <Button className={classesHome.root}>Home</Button>
          </Link>
        </div>
        <div className="title-content add-task">
          <Link to="/new-task">
            <Button className={classesHome.root}>New</Button>
          </Link>
        </div>
      </div>
      <Route path="/" exact component={Home}></Route>
      <Route path="/new-task" component={NewTask}></Route>
    </div>
  );
}

export default PageTodo;
