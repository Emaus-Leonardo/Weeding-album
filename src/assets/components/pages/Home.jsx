import HomeImg from "../../../../public/img/image-home.png";

function Home() {
  return (
    <section className="bg-custom bg-contain h-[700px] max:h-full flex justify-center items-center">
      <div className="flex relative ml-[100px]">
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
        <p className="text-[20px] font-Abhaya-Libre self-end tracking-[0.60px] pl-1">03.05.2024</p>
      </div>
    </section>
  );
}

export default Home;
