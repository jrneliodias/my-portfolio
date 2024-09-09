import SocialMedia from "@/app/static/SocialMedia";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="Hero" className=" flex flex-col items-center px-2 py-10 lg:px-20 bg-gradient-to-b from-slate-950 to-slate-900  min-h-screen text-white ">
      <div className="flex flex-col-reverse gap-5 justify-center lg:flex-row items-center lg:w-5/6 lg:gap-10 flex-1">
        <div className="flex flex-col z-20 gap-2 pointer-events-none text-white w-5/6 lg:w-3/5 items-start lg:flex-1 animate-fade-right animate-ease-in-out">
          <p className="text-5xl lg:text-6xl font-bold w-full ">
            Olá, meu nome é <span className="font-black text-blue-500">Nélio Dias</span>
          </p>
          <p className="text-2xl lg:text-3xl">Desenvolvedor Full Stack</p>
          <div className="flex mt-6 justify-start ">
            <SocialMedia size={30} />
          </div>
        </div>
        <div className="relative  w-[20rem] h-[30rem] md:w-[30rem] lg:min-h-[calc(100vh-20rem)] rounded-xl   animate-fade-left animate-ease-in-out">
          <Image className="w-3/5 sm:w-2/5 max-h-[700px] object-cover rounded-xl " fill alt="dev-image" sizes="100vw" priority src="/linkedin202408.jpg" />
        </div>
      </div>
    </section>
  );
}
