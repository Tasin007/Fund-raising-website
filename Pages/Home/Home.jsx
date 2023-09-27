import { useState, useEffect } from 'react';
import Banner from "../../components/Header/Banner/Banner";
import Card from "../../components/Cards/Card";

// I'm assuming you're importing the data from somewhere
import Datas from '../../../public/Datas.json';

const Home = () => {
    const [cards, setCards] = useState(Datas);

    const handleSearch = (searchTerm) => {
        if (searchTerm.trim()) {
            const filtered = Datas.filter(card => 
                card.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setCards(filtered);
        } else {
            setCards(Datas);
        }
    };

    return (
        <div>
            <Banner onSearch={handleSearch} />
            <Card card={cards} />
        </div>
    );
}

export default Home;
