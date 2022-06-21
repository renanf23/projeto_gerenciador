import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <Input type="text" text="Nome do Projeto" name='name' placeholder='Insira o nome do projeto'/>
            <Input type="number" text="Orçamento do projeto" name='budget' placeholder='Insira o orçamento total'/>
            <Select text='Selecione a categoria' name='category_id'/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm