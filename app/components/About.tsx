import Summary from "@/app/static/Summary";
import Timeline from "@/app/static/Timeline";

export default function About() {
    return (
        <section id="About" className="flex justify-center items-center bg-slate-800 min-h-screen py-12 text-white">
            <div className="flex justify-center items-center lg:w-5/6 text-white">
                <div className="flex flex-col gap-10 items-center lg:flex-row w-full lg:w-11/12">
                    <div className="flex w-full h-full p-5 lg:w-1/2 flex-col self-start">
                        <Summary />
                    </div>
                    <div className="flex justify-center w-full px-5 lg:p-0 lg:w-1/2 lg:flex flex-col ">
                        <Timeline />
                    </div>
                </div>
            </div>
        </section>
    )
}