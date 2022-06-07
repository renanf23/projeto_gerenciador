function Pessoa({ nome, idade, foto, profissao}) {
    return(
        <div>
            <img src={foto} alt={PaymentResponse.nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa