
import { useState } from 'react';

const Banner = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('./Resources/Rectangle-4281.png')" }}>
            <div className="absolute inset-0 bg-white opacity-70"></div>
            <div className="h-[60vh] text-center py-56 relative">
                <h1 className="text-4xl font-bold text-black">I Grow By Helping People In Need</h1>
                <div className="join py-8">
                    <input 
                        className="input input-bordered join-item" 
                        placeholder="Search here...."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button 
                        className="btn normal-case btn-error join-item rounded-md text-white"
                        onClick={() => onSearch(searchTerm)}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;