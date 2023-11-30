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
                image = "https://scrimba-airbnb-page.vercel.app/static/media/wedding-photography.de6d8e47cc4f6902350d.png" 
                rating = "4.0"
                review = '4'
                country = "KKTC"
                title = "Learn wedding photography"
                price = "$246"
            />

              <Card 
                image = "https://scrimba-airbnb-page.vercel.app/static/media/mountain-biking.4a10cddcb175d2ec7128.png" 
                rating = "3.0"
                review = '4'
                country = "TC"
                title = "Group Mountain Biking"
                price = "$36"
            />

            <Card 
                image = "https://airbnb-experience-kappa.vercel.app/images/swimmer.png" 
                rating = "5.0"
                review = '4'
                country = "USA"
                title = "Life lessonns with Katie Zaferes"
                price = "$136"
            />

            <Card 
                image = "https://scrimba-airbnb-page.vercel.app/static/media/mountain-biking.4a10cddcb175d2ec7128.png" 
                rating = "3.0"
                review = '4'
                country = "TC"
                title = "Group Mountain Biking"
                price = "$36"
            />
       
            <Card 
                image = "https://airbnb-experience-kappa.vercel.app/images/swimmer.png" 
                rating = "5.0"
                review = '4'
                country = "USA"
                title = "Life lessonns with Katie Zaferes"
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
                <span className="card-info-line"><i className="fa-solid fa-star"></i> { props.rating } <span className="lighter-text">({props.review}) . { props.country }</span></span>
                <span className="card-info-line card-info-title">{ props.title }</span>
                <span className="card-info-line"><b>From { props.price }</b> / person</span>
            </div>
        </div>
    );
}

