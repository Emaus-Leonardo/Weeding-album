import HomeImg from "../../../../public/img/image-home.png";

function Home() {
  return (
    <section className="bg-custom h-[700px] max:h-full flex justify-center items-center">
      <div className="flex relative ">
        <div className="absolute -left-52 ">
          <p className="text-[32px] text-texts font-custom tracking-widest">
            Celebrate
          </p>

          <h1 className="text-[64px] text-texts font-customHome font-bold tracking-widest">
            OUR DREAM
          </h1>

          <h1 className="text-[64px] text-texts font-customHome font-semibold tracking-widest">
            WEEDING
          </h1>

          <p></p>
        </div>

        <img className="ml-[400px]" src={HomeImg} alt="image home" />
      </div>
    </section>
  );
}

export default Home;
