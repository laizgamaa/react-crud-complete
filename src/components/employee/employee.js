import React, { useState, useEffect } from 'react';

const Employee = ({ employee, toDeleteEmployee, openModal, toEditEmployee, openModalEdit }) => {

    const [ month, setMonth ] = useState('-');
    const [ year, setYear ] = useState('-');

    useEffect(() => {
        if(employee.startdate){
            const [ getYear, getMonth ] = employee.startdate.split('-');
            setYear(getYear)
            const months = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];
            setMonth( months[Number(getMonth) - 1])
        }
    }, [employee]);

    function handleClickDelete(employee){
        toDeleteEmployee(employee);
        openModal();
    }

    function handleClickEdit(employee){
        toEditEmployee(employee);
        openModalEdit();
    }


    return (
        <>
        <div className="single-employee">

            <div className="employee-data">
                <span className="label">Nome:</span>
                <p className="name">{employee.name}</p>
                <span className="label">Email:</span>
                <p className="email">{employee.email}</p>
                <span className="label">Data de início:</span>
                <p className="startDate">{month} de {year}</p>
                <span className="label">Time:</span>
                <p className="team">{employee.team}</p>
            </div>
 
            <div className="action-buttons">
                <button className="btn btn-primary" onClick={() => handleClickEdit(employee)}>Editar</button>
                <button className="btn btn-primary" onClick={() => handleClickDelete(employee)}>Remover</button>
            </div>
        </div>
        </>
    );
}

export default Employee;