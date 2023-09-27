
const AllDonate = ({donating}) => {
    const {id, image2, title, category, category_bg_clr, card_bg_clr, text_color, button_color, description, price} = donating || {}
    return (
        <div>
             <div className=" shadow-2xl flex border-none rounded" style={{ backgroundColor: card_bg_clr }}>
                <figure><img className="w-full h-full" src={image2}/></figure>
                <div className="card-body">
                    <div className="space-y-3 ">
                        <button className=" rounded px-2 border-none font-semibold" style={{ backgroundColor: category_bg_clr, color: button_color}}>{category}</button>
                    <h2 className="font-medium text-black text-4xl" >{title}</h2>
                    <p className="font-bold" style={{ color: text_color }}>{price} </p>
                    <button className=" rounded px-4 py-2 border-none font-semibold text-white" style={{ backgroundColor: text_color}}>View Details</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default AllDonate;
