import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const CardDetails = () => {
    const card = useLoaderData()
    const {id} = useParams()
    const getCardDetails = card.find(card=>card.id === id);
    console.log(getCardDetails);

const handleAddToDonation = () =>{

    const addedDonationArray = [];

    const donation = JSON.parse(localStorage.getItem('donation'))

    if (!donation) {
        addedDonationArray.push(getCardDetails)
        localStorage.setItem('donation', JSON.stringify(addedDonationArray))
        swal("Thank You!", "Your Donation Added Successfully!", "success");
    }
else{
const isExist = donation.find(donations =>donations.id ===id )

if(!isExist){

    addedDonationArray.push(...donation, getCardDetails)
    localStorage.setItem('donation', JSON.stringify(addedDonationArray))
    swal("Thank You!", "Your Donation Added Successfully!", "success");
}


else{
    swal("Opps!", "Your Donation Already Added!", "error");

}
}

}

    
    return (
        <div >
            <div className="relative">

    <div className="flex justify-center items-center  mt-16
    ">
        <img className="w-[100%] h-[77vh] rounded-lg border" src={getCardDetails.image} />

    </div>
    <div className="w-full h-24 absolute bg-black opacity-40 bottom-0 rounded-b-lg border-none"></div>
    <button onClick={handleAddToDonation} className="rounded px-5 py-2  border-none font-semibold absolute bottom-7 left-7 bg-red-500 text-white ">Donate $290</button>
            </div>

        <h1 className="text-4xl mt-10 text-black font-bold">{getCardDetails.title}</h1>
        <p className="pt-5 mb-12 text-black">{getCardDetails.description}</p>
        </div>
    );
}

export default CardDetails;
