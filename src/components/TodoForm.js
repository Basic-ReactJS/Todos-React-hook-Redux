import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import Alert from "@material-ui/lab/Alert";
import { ErrorMessage } from "@hookform/error-message";

import useStylesNotification from "hook/makeNoti";

const defaultValues = {
  contentTask: "",
};

function Item() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
    defaultValues,
  });

  const history = useHistory();
  const classes = useStylesNotification();

  const [notiAddTask, setNotiAddTask] = useState(false);

  const onSubmit = (data, e) => {
    e.target.reset();

    setTimeout(() => {
      history.push("/react-redux");
    }, 500);
  };

  return (
    <div>
      <div className="page-new-task">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>New task</h1>
          <div className={notiAddTask ? "show" : "hidden"}>
            <div className={classes.root}>
              <Alert severity="success">noti</Alert>
            </div>
          </div>
          <input
            {...register("contentTask", {
              required: "Content task is required.",
            })}
          />

          <ErrorMessage
            errors={errors}
            name="contentTask"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                : null;
            }}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Item;
