import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Checkbox from "@material-ui/core/Checkbox";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";

import { updateTodo } from "../actions/todos";

function Item(props) {
  const [checked, setChecked] = React.useState(props.todo.isCompleted);
  const [textEdit, setTextEdit] = useState(props.todo.title);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const handleChangeText = (event) => {
    setTextEdit(event.target.value);
  };

  const handleEnterEdited = (event) => {
    if (event.key === "Enter") {
      setIsEdit(false);
      let item = {
        id: props.todo.id,
        title: event.target.value,
      };
      dispatch(updateTodo(item));
    }
  };

  const onClickDelete = () => {};

  return (
    <div>
      <div className="content-task">
        <div className="control-task">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          {!isEdit && (
            <label className={checked ? "item-completed" : "item-active"}>
              {props.todo.title}
            </label>
          )}
          {isEdit && (
            <TextField
              type="text"
              name="textEdit"
              color="secondary"
              value={textEdit}
              onChange={handleChangeText}
              className="show-edit"
              onKeyPress={handleEnterEdited}
            ></TextField>
          )}
          <EditIcon
            className="control-item control-edit-task"
            onClick={onClickEdit}
          />
          <CloseIcon className="control-item control-cancel-task" />
        </div>
      </div>
      <div className="delete-task"></div>
    </div>
  );
}

export default Item;
