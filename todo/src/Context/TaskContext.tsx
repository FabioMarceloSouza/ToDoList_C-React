import React, { createContext, useContext, useState } from "react";
import { api } from "../Services/api";

interface Task {
    id: number,
    description: string,
    status: boolean,
    created_at: Date,
    updated_at: Date
}

interface TaskContext {
    task: Task[],
    getTasks: () => void,
    createTask: (description: string) => void,
    deleteTask: (id: number) => void,
    updateTask: (task: Task) => void
}

export const TaskContext = createContext<TaskContext | null>(null);

export const TaskProvider = ({ children }: { children: JSX.Element }) => {
    const [task, setTasks] = useState<Task[]>([]);

    const getTasks = () => {
        api.get('api/v1/todos')
            .then(resp => {
                setTasks(resp.data);
            })
    }

    const createTask = (description: string) => {
        api.post('api/v1/todos', { description: description })
            .then(resp => {
                getTasks();
            })
    }

    const updateTask = (task : Task) => {
        api.put('api/v1/todos', task)
        .then(resp => {
            getTasks();
        })
    }

    const deleteTask = (id: number) => {
        api.delete('api/v1/todos/' + id)
            .then(resp => {
                getTasks();
            })
    }

    return (
        <TaskContext.Provider value={{ task, getTasks, createTask, deleteTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export const useTask = () => useContext(TaskContext);