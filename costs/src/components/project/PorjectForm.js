import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}){
    const[categories, setCategories] = useState([])

    useEffect(() => {
        fetch("https://costs-backend-renan.herokuapp.com/categories", {
            method:"GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json())
        .then((data) => {setCategories(data)}).catch((err) => console.log(err))

    }, [])

    return(
        <form className={styles.form}>
            <Input type="text" text="Nome do Projeto" name='name' placeholder='Insira o nome do projeto'/>
            <Input type="number" text="Orçamento do projeto" name='budget' placeholder='Insira o orçamento total'/>
            <Select text='Selecione a categoria' name='category_id' options={categories}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm