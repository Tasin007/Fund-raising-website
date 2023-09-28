import { useState } from 'react';
import Banner from "../../components/Header/Banner/Banner";
import Card from "../../components/Cards/Card";


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