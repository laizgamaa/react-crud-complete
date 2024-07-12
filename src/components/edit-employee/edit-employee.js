import React, { useEffect, useState } from 'react';
import Modal from '../modal/modal';
import cpfMask from '../mask'

const EditEmployee = ({ isOpen, setIsOpen, editEmployee, employee }) => {
    
    const [ id, setId ] = useState("");
    const [ name, setName ] = useState(""); 
    const [ birthdate, setBirthdate ] = useState(""); 
    const [ gender, setGender ] = useState(""); 
    const [ email, setEmail ] = useState(""); 
    const [ cpf, setCpf ] = useState(""); 
    const [ startdate, setStartdate ] = useState(""); 
    const [ team, setTeam ] = useState(""); 

    async function handleSubmit(e){
        e.preventDefault()
        editEmployee(id, name, birthdate, gender, email, cpf, startdate, team);
        setCpf("");
        setIsOpen(false);
    }

    useEffect(() => {
        if(employee){
            setId(employee._id);
            setName(employee.name);
            setBirthdate(employee.birthdate);
            setGender(employee.gender);
            setEmail(employee.email);
            setCpf(employee.cpf);
            setStartdate(employee.startdate);
            setTeam(employee.team);
        }
    }, [employee])

    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
            <form onSubmit={handleSubmit} >
            <button className="btn btn-secondary close-icon" onClick={() => {setIsOpen(false)}}>X</button>
            <h2 className="modal-header">Editar funcionário</h2>
                <div className="register-label" >
                    <label>Nome *</label>
                    <input
                        type="text" name="name" value={name} required onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="form-group col-6">
                    <div className="register-label">
                        <label>Data de nascimento *</label>
                        <input
                            type="date" name="birthdate" value={birthdate} required onChange={e => setBirthdate(e.target.value)}
                        />
                    </div>

                    <div className="register-label">
                        <label>Gênero *</label>
                        <select name="gender" id="gender" required onChange={e => setGender(e.target.value)} value={gender}>
                            <option value="Female">Feminino</option>
                            <option value="Male">Masculino</option>
                            <option value="Other">Outro</option>
                            <option value="Prefer not to say">Prefiro não dizer</option>
                        </select>
                    </div>
                </div>

                <div className="form-group col-6">
                    <div className="register-label">
                        <label>Email *</label>
                        <input 
                            type="email" name="email" value={email} required onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="register-label">
                        <label>CPF *</label>
                        <input
                            type="text" maxLength='14' name="cpf" value={cpf} required onChange={e => setCpf(cpfMask(e.target.value))}
                        />
                    </div>
                </div>

                <div className="form-group col-6">
                    <div className="register-label">
                        <label>Data de ínicio *</label>
                        <input
                            type="month" name="startDate" value={startdate} required onChange={e => setStartdate(e.target.value)}
                        />
                    </div>

                    <div className="register-label">
                        <label>Time *</label>
                        <select name="team" id="team" required onChange={e => setTeam(e.target.value)} value={team}>
                            <option value="Nenhum">Nenhum</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                        </select>
                    </div>
                </div>

                <div className="edit-employee-btn">
                    <button className="btn btn-default" type="submit">Atualizar</button>
                </div>

            </form>
        </Modal>
    );
}

export default EditEmployee;