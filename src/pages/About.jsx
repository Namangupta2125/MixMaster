
function About() {
    
  return (
    <div className="flex relative justify-center items-center h-full w-full p-5">
      <img
        src="./images/about-us.svg"
        alt=""
        className="absolute bottom-10 left-0 h-[45%] w-auto max-sm:left-[-10] "
      />
      <div className="w-[50%] max-w-2xl bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-gray-300 z-[1] max-sm:w-[80%]">
        <h3 className="text-4xl font-extrabold text-green-700 mb-4">
          About Us
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Introducing{" "}
          <span className="font-bold text-green-600">"MixMaster"</span>, the
          ultimate party sidekick app that fetches cocktails from the hilarious
          <span className="font-semibold text-green-500">
            {" "}
            Cocktails DB API
          </span>
          . With a flick of your finger, you'll unlock a treasure trove of
          enchanting drink recipes that'll make your taste buds dance and your
          friends jump with joy.
          <br />
          <br />
          Get ready to shake up your mixology game, one fantastical mocktail at
          a time, and let the laughter and giggles flow! 🍹🎉
        </p>
      </div>
    </div>
  );
}

export default About;
