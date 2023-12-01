export default function Card(props){
    return (
        <div className="card">
            <img className="card-img" src={ props.image } alt="Katie Zefier Pro Athlete"></img>
            <div className="card-info">
                <span className="card-info-line"><i className="fa-solid fa-star"></i> { props.rating } <span className="lighter-text">({props.review}) . { props.country }</span></span>
                <span className="card-info-line card-info-title">{ props.title }</span>
                <span className="card-info-line"><b>From { props.price }</b> / person</span>
            </div>
            <span style={ { display: props.openSpots === 0 ? 'block' : 'none'} } className="openSpot">Sold Out</span>
        </div>
    );
}

