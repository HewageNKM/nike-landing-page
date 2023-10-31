import Button from "../components/Button.jsx";

const Subscribe = () => {
  return (
    <section className="max-container justify-between items-center flex max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up From
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h3>
      <div className="lg:max-w-[40%] flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribenike.com"
        className="input"/>
        <div className="flex max-sm:justify-end max-sm:w-full items-center">
          <Button label="Sign Up"/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe