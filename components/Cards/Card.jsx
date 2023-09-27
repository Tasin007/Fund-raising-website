import SingleCard from "./SingleCard";

const Card = ({card}) => {
    return (
        <div className="py-6 ">
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    card?.map(cards=><SingleCard key={cards.id} cards={cards}></SingleCard>)
                }
            </div>
        </div>
    );
}

export default Card;
