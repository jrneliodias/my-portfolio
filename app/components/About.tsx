import Summary from "@/static/Summary";
import Timeline from "@/static/Timeline";

export default function About() {
    return (
        <section id="About" className="flex justify-center items-center bg-slate-800 h-screen text-white">
            <div className="flex justify-center items-center  text-white">
                <div className="flex flex-col gap-10 items-center lg:flex-row w-full p-3 lg:w-11/12">
                    <div className="flex w-full p-5 lg:w-1/2 flex-col ">
                        <Summary />
                    </div>
                    <div className="flex justify-center w-5/6 lg:w-1/2 lg:flex flex-col ">
                        <Timeline />
                    </div>
                </div>
            </div>
        </section>
    )
}