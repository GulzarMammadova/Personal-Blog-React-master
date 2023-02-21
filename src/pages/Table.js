import '../App.css';
import React, { useState } from 'react'


export function Table() {
    const [formData, setFormData] = useState([])
    const [tableData, setTableData] = useState({
        name: '',
        surname: '',
        age: ''
    })

    const handleInput = (e) => {
        setTableData({ ...tableData, [e.target.name]: e.target.value })
    }
    const save = () => {
        setFormData([...formData, tableData])
    }

    return (
        <div className="table-list">
            <input onChange={(handleInput)} name="name" type='text'  placeholder='Name' />
            <input onChange={(handleInput)} name="surname" type='text'  placeholder='Surname' />
            <input onChange={(handleInput)} name="age" type='number'  placeholder='Age' />
            <button onClick={save}>Save button</button>

            <h2>Users Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((a, b) =>
                     <tr key={b}>
                        <td>{b + 1}</td>
                        <td>{a.name}</td>
                        <td>{a.surname}</td>
                        <td>{a.age}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}