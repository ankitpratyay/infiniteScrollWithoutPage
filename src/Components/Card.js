const Card = ({photo})=>{
    console.log(photo)
    return (
        <div className="cardContainer">
            <div ><img className="cardImage" src={photo.url} alt={photo.title}/></div>
            <div>{photo.title}</div>
        </div>
    )
}
export default Card;
