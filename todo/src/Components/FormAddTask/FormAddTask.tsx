import './task.css';
import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik';
import { useTask } from '../../Context/TaskContext';


const FormAddTask = () => {
    const task = useTask();

    const teste = (values: FormikValues) => {
        task?.createTask(values.task);
    }
    return (
        <div className='row '>
            <Formik
                initialValues={{ task: '' }}
                onSubmit={(values) => {
                    teste(values)
                }}
            >
                {
                    () => (
                        <Form>
                            <div className="col-md-12 container-task">
                                <Field type="text" name="task" placeholder="Digite sua Tarefa..." className="input-task" />
                                <button type='submit' className='btn btn-primary'>Criar</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default FormAddTask;