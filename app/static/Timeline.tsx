import type { TimelineItem } from '@/constants';
import Tag from './Tag';

type TimelineProps = {
  data: TimelineItem[];
};

const Timeline = ({ data }: TimelineProps) => {
  return (
    <div className="text-sm lg:text-lg">
      {data.map((item, index) => (
        <div key={'W' + index} className="flex gap-5 py-2">
          <div>
            <div className="flex justify-center items-center text-white rounded-full w-16 h-16 lg:w-20 lg:h-20 bg-slate-600">
              <div className="flex justify-center items-center w-14 h-14 lg:h-[72px] lg:w-[72px] font-bold bg-slate-800 rounded-full">
                {item.year}
              </div>
            </div>
            {index < data.length - 1 ? (
              <div className="w-1 bg-slate-600 m-auto h-full" />
            ) : (
              <div className="h-1" />
            )}
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold">
              {item.title + '@'}
              <span className="text-teal-400 font-bold">{item.company}</span>
            </div>
            <ul>
              {item.tasks.map((task, i) => (
                <li className="mr-1.5" key={'t' + i}>{task}</li>
              ))}
            </ul>
            <ul className="mt-1 flex flex-wrap gap-y-2" aria-label="Technologies used:">
              {item.tags.map((tag, i) => (
                <li className="mr-1.5" key={'tag' + i}>
                  <Tag title={tag} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
