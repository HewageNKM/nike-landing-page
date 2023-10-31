import Button from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {shoe8} from "../assets/images";

const SuperQuality = () => {
  return (
    <section id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
         We Provide You <br/> <span className="text-coral-red">Super</span> <span className="text-coral-red">Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum!
        </p>
        <div className="mt-11">
          <Button label='View Details'
                  iconURL={arrowRight}
          />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
          <img src={shoe8} alt="shoe8"  width={430} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality