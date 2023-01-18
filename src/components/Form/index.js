import { useState } from "react"
import Button from "../Button"
import DropdownList from "../DropdownList"
import TextField from "../TextField"
import './Form.css'

const Form = (props) => {

    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const toSave = (event) => {
        event.preventDefault()
        props.addEmployee({name, role, image, team})
    }

    return (
        <section className="form">
            <form onSubmit={toSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField required={true} label="Nome" placeholder="Digite seu nome" value={name} onChange={value => setName(value)} />
                <TextField required={true} label="Cargo" placeholder="Digite seu cargo" value={role} onChange={value => setRole(value)} />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" value={image} onChange={value => setImage(value)} />
                <DropdownList required={true} label="Time" items={teams} value={team} onChange={value => setTeam(value)} />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;