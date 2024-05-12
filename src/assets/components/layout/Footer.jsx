function Footer() {
  return (
    <footer className="bg-colorFooter h-[250px] text-texts flex">
      <div className="container mx-auto flex flex-col items-center justify-center ">
        <div className="flex gap-5 text-[36px] tracking-widest">
          <p className="font-custom">Emaús</p>
          <p className="font-custom2">&</p>
          <p className="font-custom">Hellen</p>
        </div>
        <div className="flex flex-col justify-center items-center tracking-widest">
          <p className="font-custom font-extrabold text-[16px]">03.05.2024</p>
        </div>
        
          <span className="bg-texts w-[350px] h-[1px] mt-2 "></span>
          <p className="text-texts mt-2" >&copy; 2024 Emaús Leonardo</p>

      </div>
    </footer>
  );
}

export default Footer;
