const ServiceCard = (props) => {
    return (
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
            <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full">
                <img src={props.imgURL} alt={props.imgURL} width={24} height={24}/>
            </div>
            <h3 className="mt-5 font-palanquin leading-normal font-bold text-3xl">
                {props.label}
            </h3>
            <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{props.subtext}</p>
        </div>
    );
};

export default ServiceCard;