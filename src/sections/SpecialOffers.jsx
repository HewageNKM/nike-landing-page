import Button from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {offer} from "../assets/images/index.js";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full"/>
      </div>
      <div>
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28'>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"><span className="text-coral-red mt-3 inline-block">Special</span> Offer</h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals,
            quality comfort, and
            innovation for active life.
          </p>
          <Button label='Learn More'
                  iconURL={arrowRight}
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers