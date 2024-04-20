import Summary from "@/static/Summary";
import Timeline from "@/static/Timeline";

export default function About() {
    return (
        <div id="About" className="flex justify-center items-center bg-slate-800 h-screen text-white">
            <div className="flex justify-center items-center text-white">
                <div className="flex flex-col lg:flex-row w-full">
                    <div className="flex w-full p-5 g:w-1/2 flex-col lg:p-20">
                        <Summary />
                    </div>
                    <div className="w-5/6 lg:w-1/2 lg:flex flex-col pl-10">
                        <Timeline />
                    </div>
                </div>
            </div>
        </div>
    )
}