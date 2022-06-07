function Button(props){
    return(
        <>
            <button onClick={props.event}>{props.texto}</button>
        </>
    )
}

export default Button