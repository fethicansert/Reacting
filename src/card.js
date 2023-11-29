export default function CardContainer(){
    return (
        <div className="card-container">
            <Card 
                image = "https://airbnb-experience-kappa.vercel.app/images/swimmer.png" 
                start = "5.0"
                country = "USA"
                infoText = "Life lessonns with Katie Zaferes"
                price = "$136"
            />

              <Card 
                image = "https://airbnb-experience-kappa.vercel.app/images/swimmer.png" 
                start = "5.0"
                country = "USA"
                infoText = "Life lessonns with Katie Zaferes"
                price = "$136"
            />

              <Card 
                image = "https://airbnb-experience-kappa.vercel.app/images/swimmer.png" 
                start = "5.0"
                country = "USA"
                infoText = "Life lessonns with Katie Zaferes"
                price = "$136"
            />

              <Card 
                image = "https://airbnb-experience-kappa.vercel.app/images/swimmer.png" 
                start = "5.0"
                country = "USA"
                infoText = "Life lessonns with Katie Zaferes"
                price = "$136"
            />

        </div>
    );
}


function Card(props){
    return (
        <div className="card">
            <img className="card-img" src={ props.image } alt="Katie Zefier Pro Athlete"></img>
            <div className="card-info">
                <span className="card-info-line"><i className="fa-solid fa-star"></i> { props.start } <span className="lighter-text">(6) . { props.country }</span></span>
                <span className="card-info-line">{ props.infoText }</span>
                <span className="card-info-line"><b>From { props.price }</b> / person</span>
            </div>
        </div>
    );
}

