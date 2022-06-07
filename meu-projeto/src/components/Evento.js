import Button from "./evento/Button"

function Evento() {

    function meuEvento(){
       console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento(){
        console.log(`Ativando segundo evento!`)
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} texto='Primeiro Evento' />
            <Button event={segundoEvento} texto='Segundo Evento' />
        </div>
    )
}

export default Evento