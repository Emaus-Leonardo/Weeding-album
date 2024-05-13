import HomeImg from "../../../../public/img/image-home.png";
import Ramo from "../../../../public/img/ramo1.png";
import Ramo2 from "../../../../public/img/ramo2.png";
import Ramo3 from "../../../../public/img/ramo3.png";
import Ramo4 from "../../../../public/img/ramo4.png";
import Ramo5 from "../../../../public/img/ramo5.png";
import Ramo6 from "../../../../public/img/ramo6.png";
import Ramo7 from "../../../../public/img/ramo7.png";

function Home() {
  return (
    <section className="bg-custom bg-contain h-[700px] max:h-full flex justify-center items-center overflow-x-hidden">
      <div className="flex relative ml-[300px]">
        <div className="absolute -left-28 top-16 flex flex-col">
          <p className=" text-[32px] text-texts z-[1] !font-abhayalibre tracking-[4.16px]">
            Celebrate
          </p>

          <h1 className="text-[64px] text-texts font-CormorantUnicase-Bold  tracking-[9.60px]">
            OUR DREAM
          </h1>

          <h2 className="text-[62px] text-texts relative mt-[-16px] font-CormorantUnicase-SemiBold tracking-[6.40px]">
            WEEDING
          </h2>

          <h3 className="text-[12px] text-black leading-[14px] tracking-[0.36px] font-CormorantUnicase-Bold w-[50%]">
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </h3>
        </div>

        <img className="pl-[430px]" src={HomeImg} alt="image home" />
        <p className="text-[20px] font-Abhaya-Libre self-end tracking-[0.60px] pl-1">
          03.05.2024
        </p>
        
      </div>

      <div className="relative ">
        <div className=" w-[200px] h-[200px] flex justify-end" >
          <img className="absolute h-[100%] w-[100%] left-[20%] bottom-[125%] " src={Ramo} alt="" />
          <img className="absolute h-[100%] w-[100%] left-[290px] top-[100px]" src={Ramo5} alt="" />
          <img className="absolute h-[100%] w-[100%] left-[280px] top-[250px]" src={Ramo4} alt="" />
          <img className="absolute h-[100%] w-[100%] right-[1390px] top-[250px]" src={Ramo2} alt="" />
          <img className="absolute h-[205px] w-[205px] right-[630px] top-[245px]" src={Ramo6} alt="" />
          <img className="absolute h-[144px] w-[144px] right-[830px] top-[306px]" src={Ramo7} alt="" />
          <img className="absolute h-[100%] w-[100%] right-[1420px] bottom-[150px]" src={Ramo3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
