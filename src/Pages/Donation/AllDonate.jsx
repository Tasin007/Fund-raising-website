import { Link } from "react-router-dom";

const AllDonate = ({donating}) => {
    const {id, image2, title, category, category_bg_clr, card_bg_clr, text_color, button_color, price} = donating || {}
    return (
        <div>
             <div className=" shadow-2xl flex border-none rounded h-[250px] " style={{ backgroundColor: card_bg_clr }}>
                <figure><img className="w-[100%] h-full" src={image2}/></figure>
                <div className="card-body">
                    <div className="space-y-3 ">
                        <button className=" rounded px-2 border-none font-semibold" style={{ backgroundColor: category_bg_clr, color: button_color}}>{category}</button>
                    <h2 className=" text-black text-2xl" >{title}</h2>
                    <p className="font-bold" style={{ color: text_color }}>{price} </p>
                    <Link to={`/cardsdetails/${id}`}>
                    <button className=" rounded px-4 py-2 border-none font-semibold text-white" style={{ backgroundColor: text_color}}>View Details</button>
                    </Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default AllDonate;
