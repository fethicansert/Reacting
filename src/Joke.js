function Joke(props){
    return (
        <div className="joke-container">
            {props.setup && <h3>Setup: {props.setup}</h3>} 
            <p>{ props.punchline }</p>
        </div>
    );
}

export default Joke;
  
