import { ChangeEvent, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useTask } from '../../Context/TaskContext';
import './list.css';

interface Props {
    description: string,
    status: boolean,
    id: number,
    created_at: Date,
    updated_at: Date
}

const ListTask = ({ description, status, id, created_at, updated_at }: Props) => {
    const task = useTask();
    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState<string>(description);

     const updateTasks = () => {
        task?.updateTask({ description: update ,created_at, status, id, updated_at })
        setShow(false);
     }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <tr>
                <th >{description}</th>
                <td >{JSON.stringify(status)}</td>
                <td ><Button variant="primary" className='btn-table' onClick={handleShow}>
                    Editar
                </Button></td>
                <td ><button className="btn btn-danger btn-table" onClick={() => task?.deleteTask(id)}>Excluir</button></td>
            </tr>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" 
                    name='newTask' 
                    placeholder='Digite sua tarefa...' 
                    className='form-control' 
                    value={update}
                    onChange={ (e : ChangeEvent<HTMLInputElement>) => setUpdate(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        fechar
                    </Button>
                    <Button variant="primary" onClick={updateTasks}>
                        Salvar 
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ListTask;