import HomeImg from "../../../../public/img/image-home.png";
import Hiro from "../../../../public/img/Hiro.png";

function Home() {
  return (
    <section className="bg-custom h-[700px] flex justify-center items-center ">
      <div className="flex relative ml-[100px] max-lg:flex-col">
        <div className="absolute md:-left-28 md:top-16 flex flex-col ">
          <p className=" text-texts !font-abhayalibre md:tracking-[4.16px] md:text-[32px]">
            Celebrate
          </p>

          <h1 className="md:text-[64px] text-texts font-CormorantUnicase-Bold md:tracking-[9.60px]">
            OUR DREAM
          </h1>

          <h2 className="md:text-[62px] text-texts relative md:mt-[-16px] font-CormorantUnicase-SemiBold md:tracking-[6.40px]">
            WEEDING
          </h2>

          <h3 className="text-[12px] text-black leading-[14px] tracking-[0.36px] font-CormorantUnicase-Bold w-[50%]">
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </h3>
        </div>

        <div className="absolute left-48 top-[525px]">
          <img className="" src={Hiro} alt="" />
        </div>

        <img className="pl-[430px]" src={HomeImg} alt="image home"  />
        <p className="text-[20px] font-Abhaya-Libre self-end tracking-[0.60px] pl-1 ">
          03.05.2024
        </p>
      </div>
    </section>
  );
}

export default Home;
