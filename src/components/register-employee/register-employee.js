import React, { useState } from 'react';
import Modal from '../modal/modal';
import cpfMask from '../mask'

const RegisterEmployee = ({ isOpen, setIsOpen, registerEmployee }) => {
    
    const [ name, setName ] = useState(""); 
    const [ birthdate, setBirthdate ] = useState(""); 
    const [ gender, setGender ] = useState(""); 
    const [ email, setEmail ] = useState(""); 
    const [ cpf, setCpf ] = useState(""); 
    const [ startdate, setStartdate ] = useState("");
    const [ team, setTeam ] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        registerEmployee(name, birthdate, gender, email, cpf, startdate, team);
        setCpf("");
        setTeam("");
        setIsOpen(false);
    }

    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
            <form onSubmit={handleSubmit} >
                <button className="btn btn-secondary close-icon" onClick={() => {setIsOpen(false)}}>X</button>
                <h2 className="modal-header">Adicionar funcionário</h2>
                <div className="register-label">
                    <label>Nome *</label>
                    <input
                        type="text" name="name" required onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="form-group col-6">
                    <div className="register-label">
                        <label>Data de nascimento *</label>
                        <input
                            type="date" name="birthdate" required onChange={e => setBirthdate(e.target.value)}
                        />
                    </div>

                    <div className="register-label">
                        <label>Gênero *</label>
                        <select name="gender" id="gender" required onChange={e => setGender(e.target.value)}>
                            <option value="Female">Feminino</option>
                            <option value="Male">Masculino</option>
                            <option value="Other">Outro</option>
                            <option value="Prefer not to say">Prefiro não responder</option>
                        </select>
                    </div>
                </div>

                <div className="form-group col-6">
                    <div className="register-label">
                        <label>Email *</label>
                        <input 
                            type="email" name="email" required onChange={e => setEmail(e.target.value)}
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
                            type="month" name="startDate" required onChange={e => setStartdate(e.target.value)}
                        />
                    </div>

                    <div className="register-label">
                        <label>Time *</label>
                        <select name="team" id="team" required onChange={e => setTeam(e.target.value)}>
                            <option value="Nenhum">Nenhum</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                        </select>
                    </div>
                </div>

                <div className="create-employee-btn">
                    <button className="btn btn-default" type="submit">Adicionar</button>
                </div>
            </form>
        </Modal>
    );
}

export default RegisterEmployee;