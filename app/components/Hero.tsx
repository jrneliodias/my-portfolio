import SocialMedia from "@/app/static/SocialMedia";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section
      id="Hero"
      className="flex flex-col items-center px-2 py-10 lg:px-20 bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900 min-h-screen text-slate-900 dark:text-white"
    >
      <div className="flex flex-col-reverse gap-5 justify-center lg:flex-row items-center lg:w-5/6 lg:gap-10 flex-1">
        <div className="flex flex-col z-20 gap-3 pointer-events-none w-5/6 lg:w-3/5 items-start lg:flex-1 animate-fade-right animate-ease-in-out">
          <p className="font-display text-5xl lg:text-7xl font-bold w-full leading-tight tracking-tight">
            {t("greeting")}{" "}
            <span className="font-black text-violet-600 dark:text-violet-400">
              Nélio Dias
            </span>
          </p>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 font-medium">
            {t("role")}
          </p>
          <div className="flex mt-6 justify-start">
            <SocialMedia size={30} />
          </div>
        </div>
        <div className="relative w-[20rem] h-[30rem] md:w-[30rem] lg:min-h-[calc(100vh-20rem)] rounded-xl animate-fade-left animate-ease-in-out">
          <Image
            className="w-3/5 sm:w-2/5 max-h-[700px] object-cover rounded-xl"
            fill
            alt="dev-image"
            sizes="100vw"
            priority
            src="/perfil.png"
          />
        </div>
      </div>
    </section>
  );
}
