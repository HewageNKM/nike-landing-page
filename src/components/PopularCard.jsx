import {star} from "../assets/icons/index.js";
import {useState} from "react";

const PopularCard = (props) => {
    let [rating,setRating] = useState(0)
    function getRating() {
        rating = Math.random();
        if((rating * 10) <= 5 && (rating * 10) >1){
            return Math.round(rating * 10)
        }else {
            return 5;
        }

    }
    function handleClick() {
        setRating(getRating())
    }
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={props.imgURL} alt={props.name}
            className="w-[200px] h-[200px]"
            />
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="rating" width={24} height={24} onLoad={handleClick}/>
                <p className="text-xl leading-normal font-montserrat text-slate-gray">({rating})</p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{props.name}</h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{props.price}</p>
        </div>
    );
};

export default PopularCard;