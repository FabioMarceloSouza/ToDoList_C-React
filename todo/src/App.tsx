import { useEffect, useState } from 'react';
import './App.css';
import FormAddTask from './Components/FormAddTask/FormAddTask';
import ListTask from './Components/ListTask/ListTask';
import { useTask } from './Context/TaskContext';
import { api } from './Services/api';

interface Task {
  id: number,
  description: string,
  status: boolean,
  created_at: Date,
  updated_at: Date
}

function App() {
  const task = useTask();

  useEffect(() => {
    task?.getTasks();
  }, []);

  //console.log(tasks)

  return (
    <div className="container">
      <h1 className='text-center mt-3'>Lista de Tarefas</h1>
      <FormAddTask />

      <table className='table mt-5'>
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          {task?.task.map((item: Task) => (
            <ListTask key={item.id}
              id={item.id}
              description={item?.description}
              status={item.status}
              created_at={item.created_at}
              updated_at={item.updated_at}
            />
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
