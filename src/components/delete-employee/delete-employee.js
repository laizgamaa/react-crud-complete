import React from 'react';
import Modal from '../modal/modal';

const DeleteEmployee = ({ isOpen, setIsOpen, deleteEmployee, employee }) => {

    async function handleSubmit(e){
        e.preventDefault()
        deleteEmployee(employee)
        setIsOpen(false);
    }

    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
            <div className="delete-content-modal">
                <form onSubmit={handleSubmit} >
                    <h2>Tem certeza que deseja prosseguir com essa ação?</h2>
                    <div className="action-buttons">
                        <button className="btn btn-primary" onClick={handleSubmit}>Sim, quero continuar</button>
                        <button className="btn btn-secondary" onClick={ () => { setIsOpen(false)} }>Cancelar</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default DeleteEmployee;