import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../context/AuthProvider";

const TaskListManager = (props) => {
  return (
    <div
      id="tasklistmanager"
      className="h-[50%] w-full overflow-x-auto mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap rounded-sm sm:h-[60%] sm:gap-4 sm:py-3 sm:mt-5 md:h-auto md:gap-3 md:py-2"
    >
      {props.data.tasks.map((elem) => {
        if (elem.active) {
          return <AcceptTask key={elem.id} task={elem} />;
        }
        if (elem.complete) {
          return <CompleteTask key={elem.id} task={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={elem.id} task={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={elem.id} task={elem} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskListManager;