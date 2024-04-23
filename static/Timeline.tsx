import { timelineData } from "@/constants/constant"
import Tag from "./Tag"


const Timeline = () => {
    return (
        <div className="text-sm lg:text-lg">
            {timelineData.map((item, index) => (
                <div key={"W" + index} className="flex gap-5 py-2">
                    <div>
                        <div className="flex justify-center items-center text-white rounded-full w-16 h-16 lg:w-20 lg:h-20 bg-slate-600 ">
                            <div className="flex justify-center items-center w-14 h-14 lg:h-[72px] lg:w-[72px] font-bold bg-slate-800 rounded-full">
                                {item.year}
                            </div>
                        </div>
                        {index < timelineData.length - 1 ?
                            (<div className="w-1 bg-slate-600 m-auto h-full" />) :
                            (<div className="h-1" />)
                        }
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-bold">
                            {item.title + "@"}
                            <span className="text-teal-400 font-bold">
                                {item.company}
                            </span>
                        </div>
                        <p className="">
                            {item.tasks.map((task, index) => (
                                <p className=" mr-1.5"
                                    key={"t" + index}>
                                    {task}
                                </p>))}
                        </p>
                        <ul className="mt-1 flex flex-wrap gap-y-2" aria-label="Technologies used:">
                            {item.tags.map((tag, index) => (
                                <li className=" mr-1.5"
                                    key={"t" + index}>
                                    <Tag title={tag} />
                                </li>))}
                        </ul>
                    </div>
                </div>
            ))}

        </div>
    )

}

export default Timeline