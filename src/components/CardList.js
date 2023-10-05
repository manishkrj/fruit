import './CardList.css'
import Card from './Card';
const CardList = ({fruits})=>{
    return(
        <div className='container'>
            {
                fruits.map(
                    (i)=>{
                        return (
                            <Card fruitName={i.name} fruitPrice={i.price} fruitImage={i.image} />
                        )
                    }
                )
            }
        </div>
    )
}
export default CardList;