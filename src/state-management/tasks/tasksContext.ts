import { createContext, Dispatch } from 'react';
import { Task, TaskAction } from "./TasksProvider";

interface  TasksContextType {
    tasks: Task[];
    tasksDispatch: Dispatch<TaskAction>
}

const TasksContext = createContext<TasksContextType>({} as TasksContextType)

export default TasksContext; 