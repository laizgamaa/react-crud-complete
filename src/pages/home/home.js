import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Employee from '../../components/employee/employee';
import RegisterEmployee from '../../components/register-employee/register-employee';
import DeleteEmployee from '../../components/delete-employee/delete-employee';
import EditEmployee from '../../components/edit-employee/edit-employee';
import api from '../../services/employee.api';

const Home = () => {
    
    const [ employees, setEmployees ] = useState([]);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ modalEditOpen, setModalEditOpen ] = useState(false);
    const [ modalDeleteOpen, setModalDeleteOpen ] = useState(false);
    const [ editingEmployee, setEditingEmployee ] = useState(null);
    const [ deletingEmployee, setDeletingEmployee ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        findAll();
    }, []);

    async function findAll(){       
        const { data } = await api.get('/employees');
        setEmployees(data)
    }

    async function registerEmployee(name, birthdate, gender, email, cpf, startdate, team){
        try {
            await api.post('/employees', {
                name,
                birthdate,
                gender,
                email,
                cpf,
                startdate,
                team
            });

            const Promise = findAll();
    
            toast.promise(Promise, {
                loading: 'Loading...',
                success: 'Success!',
                error: 'Fetch error',
            });
        } catch(e){
            console.log('API error');
        }
    }


    async function deleteEmployee(employee){
        try {
            await api.delete('/employees/' + employee._id);
            const Promise = findAll();
    
            toast.promise(Promise, {
                loading: 'Loading...',
                success: 'Success!',
                error: 'Fetch error',
            });
        } catch(e){
           console.log('API error');
        }
        
    }

    async function editEmployee(id, name, birthdate, gender, email, cpf, startdate, team){
        try{
            await api.put(`/employees/${id}`, {
                name,
                birthdate,
                gender,
                email,
                cpf,
                startdate,
                team,
            })
            const Promise = findAll();
    
            toast.promise(Promise, {
                loading: 'Loading...',
                success: 'Success!',
                error: 'Fetch error',
            });
        } catch(e){
            console.log('API error');
        }
        
    }

    function toggleModal() {
        setModalOpen(!modalOpen);
    }

    function toggleModalEdit() {
        setModalEditOpen(!modalEditOpen);
    }

    function toggleModalDelete() {
        setModalDeleteOpen(!modalDeleteOpen);
    }
    
    function toDeleteEmployee(employee){
        setDeletingEmployee(employee);
    }

    function toEditEmployee(employee){
        setEditingEmployee(employee);
    }

    const allEmployees = employees.filter( employee => {
        return employee.name.toLowerCase();
    })

    return (
        <>
            <RegisterEmployee
                isOpen={modalOpen}
                setIsOpen={toggleModal}
                registerEmployee={registerEmployee}
            />
            <DeleteEmployee
                isOpen={modalDeleteOpen}
                setIsOpen={toggleModalDelete}
                deleteEmployee={deleteEmployee}
                employee={deletingEmployee}
            />
            <EditEmployee 
                isOpen={modalEditOpen}
                setIsOpen={toggleModalEdit}
                editEmployee={editEmployee}
                employee={editingEmployee}
            />
            <div className="container">
                <div className="main-content">
                    <h1>Nutcache Brasil</h1>
                    <h3>Bem vindo ao gerenciador de pessoas!</h3>
                    <div className="button-employee">
                        <button 
                            className="btn btn-default add-btn" 
                            onClick={() => {toggleModal()}}
                        >
                            Adicionar novo funcionário
                        </button>
                    </div>
                </div>

                <div className="employee-section">
                    <div className="employees-list">
                        {allEmployees.map(employee => (
                                <Employee
                                    key={employee._id}
                                    employee={employee}
                                    toDeleteEmployee={toDeleteEmployee}
                                    toEditEmployee={toEditEmployee}
                                    openModal={toggleModalDelete}
                                    openModalEdit={toggleModalEdit}
                                />
                            ))
                        }
                    </div>

                    {!allEmployees.length &&
                        <div className="no-employee-found">
                            <p>Nenhum funcionário aqui</p>
                        </div>
                    }
                    </div>

            </div>

        </>
    );
}

export default Home;