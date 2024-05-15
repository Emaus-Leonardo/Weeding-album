import HomeImg from "../../../../public/img/image-home.png";

function Home() {
  return (
    <>
      <div className="w-full bg-gray-300">
        
          <div className="flex h-[700px] items-center justify-center bg-custom px-14 pb-[5px] sm:pt-[100px] sm:pb-[100px] md:h-auto transition-all ease-linear">
            <div className="mx-auto flex w-full max-w-[954px] flex-col gap-[25px]">
              <div className="flex items-start justify-between gap-5 md:flex-col">
                <div className="mt-[71px] w-[49%] flex justify-center md:w-full">
                  <div className="flex w-full flex-col transition-all ease-linear ">
                    <div className="flex flex-col items-start">
                      <div className="flex flex-col items-start">
                        <p className="text-[24px] text-texts relative z-[1] !font-abhayalibre tracking-[4.16px]  transition-all ease-linear">
                          Celebrate
                        </p>
                        <h1 className="text-[64px] text-texts relative mt-[-8px] !font-CormorantUnicase-Bold tracking-[9.60px] tablet:tracking-wide sm:tracking-wide sm:text-[42px]  transition-all ease-linear">
                          OUR DREAM
                        </h1>
                      </div>
                      <h2 className="text-[62px] text-texts relative mt-[-16px] !font-CormorantUnicase-SemiBold tracking-[6.40px]  sm:tracking-wide sm:text-[42px]  transition-all ease-linear">
                        WEEDING
                      </h2>
                    </div>
                    <h3 className="text-[12px] leading-[14px] tracking-[0.36px] !text-black-900  transition-all ease-linear">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-[11px] mr-[95px] flex-col md:w-full  transition-all ease-linear">
                  <img
                    src={HomeImg}
                    alt="date image"
                    className="h-full w-[100%] sm:w-full "
                  />
                  <h4 className=" text-[20px] !font-CormorantUnicase-SemiBold text-texts">
                    03.05.2024
                  </h4>

                </div>
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
}

export default Home;
