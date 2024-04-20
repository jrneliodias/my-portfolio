import Tag from "./Tag"

const data = [
    {
        title: "Fullstack Developer",
        company: "Freelancing",
        tasks: "Building modern web applications with API integration such as landing pages and dashboards",
        tags: ["Next.Js", "React.Js", "Typescript", "REST API"],
        year: "2024"
    },
    {
        title: "Backend Developer",
        company: "Tech Solutions Inc.",
        tasks: "Developing RESTful APIs and database management for enterprise applications",
        tags: ["Node.js", "Express.js", "MongoDB", "REST API"],
        year: "2023"
    },

]

const Timeline = () => {
    return (
        <div className="text-lg">
            {data.map((item, index) => (
                <div key={"W" + index} className="flex gap-5 py-2">
                    <div>
                        <div className="flex justify-center items-center text-white rounded-full w-20 h-20 bg-slate-600 ">
                            <div className="flex justify-center items-center  h-[72px] w-[72px] font-bold bg-slate-800 rounded-full">
                                {item.year}
                            </div>
                        </div>
                        {index < data.length - 1 ?
                            (<div className="w-1 bg-slate-600 m-auto h-full" />) :
                            (<div className="h-16" />)
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
                            {item.tasks}
                        </p>
                        <ul className="mt-1 flex flex-wrap" aria-label="Technologies used:">
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