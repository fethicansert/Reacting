export default function CardContainer(){
    return (
        <div className="card-container">
            <Card 
                image = "https://airbnb-experience-kappa.vercel.app/images/swimmer.png" 
                rating = "5.0"
                review = '4'
                country = "USA"
                title = "Life lessonns with Katie Zaferes"
                price = "$136"
            />

              <Card 
                image = "https://www.eivans.com/wp-content/uploads/2020/06/eSzcgjNA-Add-Logo-custom.jpg" 
                rating = "4.0"
                review = '4'
                country = "KKTC"
                title = "Life lessonns with Katie Zaferes"
                price = "$246"
            />

              <Card 
                image = "https://airbnb-experience-kappa.vercel.app/images/swimmer.png" 
                rating = "3.0"
                review = '4'
                country = "TC"
                title = "Life lessonns with Katie Zaferes"
                price = "$36"
            />

              <Card 
                image = "https://airbnb-experience-kappa.vercel.app/images/swimmer.png" 
                rating = "2.0"
                review = '4'
                country = "UK"
                title = "Life lessonns with Katie Zaferes"
                price = "$56"
            />

        </div>
    );
}


function Card(props){
    return (
        <div className="card">
            <img className="card-img" src={ props.image } alt="Katie Zefier Pro Athlete"></img>
            <div className="card-info">
                <span className="card-info-line"><i className="fa-solid fa-star"></i> { props.rating } <span className="lighter-text">({props.review}) . { props.country }</span></span>
                <span className="card-info-line">{ props.title }</span>
                <span className="card-info-line"><b>From { props.price }</b> / person</span>
            </div>
        </div>
    );
}

