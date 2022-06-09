function SeuNome({setNome}){

    return(
        <div>
            <p>Digite o seu nome:</p>
            <input type="text" placeholder="Qual é o seu Nome?" 
                onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}

export default SeuNome