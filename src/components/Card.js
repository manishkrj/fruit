import './Card.css'
const Card = ({fruitName,fruitPrice,fruitImage})=>{
    return(
            <div className="fruit box_color_align">
                <h4 className="fruitname">{fruitName} | Rs.{fruitPrice}</h4>
                <div className="image"><img src={fruitImage} alt={fruitName}></img></div>
                <button className="removebag">-</button>
                <button className="addbag">+</button>
            </div>
    )
}
export default Card;