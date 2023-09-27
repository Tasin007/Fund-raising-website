import { Link } from "react-router-dom";

const SingleCard = ({cards}) => {
    const {id, image, title, category, category_bg_clr, card_bg_clr, text_color, button_color} = cards || {}
    return (
        <Link to={`/cardsdetails/${id}`}>
        <div>
            <div className="card shadow-2xl " style={{ backgroundColor: card_bg_clr }}>
                <figure><img className="w-full" src={image}/></figure>
                <div className="card-body">
                    <div className=" ">
                        <button className=" rounded px-2 border-none font-semibold" style={{ backgroundColor: category_bg_clr, color: button_color}}>{category}</button>
                    </div>
                    <h2 className="font-bold" style={{color: text_color}}>{title}</h2>
                    
                </div>
            </div>
        </div>
        </Link>
    );
}

export default SingleCard;
