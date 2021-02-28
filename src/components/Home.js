import React from "react";
import Drawer from "./Drawer";
import { TodoList } from "./TodoList";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export class Home extends React.Component {
  render() {
    return (
      <div className="id">
        <Drawer />
        <TodoList
          todoList={
            localStorage.getItem("items") === null
              ? [
                {   
                    descripcion: "some description text ",
                    responsable: {
                        name: "Santiago Carrillo",
                        email: "sancarbar@gmail.com"
                    },
                    status: "ready",
                    dueDate: 156464645646
                },
                {   
                    descripcion: "Learn to program in ReactJS",
                    responsable: {
                      name: "Cesar Gonzalez",
                      email: "cesego98@gmail",
                    },
                    status: "completed",
                    dueDate: 156464645646
                },
              ]
              : JSON.parse(localStorage.getItem("items"))
          }
        />
        <Fab
          color="primary"
          aria-label="add"
          href="/new-task"
          className="fab"
          style={{
            position: "absolute",
            right: "0px",
            bottom: "0",
            margin: "30px"
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}