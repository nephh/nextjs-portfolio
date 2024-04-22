import Image from "next/image";
import { Meteors } from "./ui/meteors";

type ProjectData = {
  title: string;
  description: string;
  tools: string[];
  date: number;
  url: string;
  imgUrl: string;
};

export default function Project({
  title,
  description,
  tools,
  date,
  url,
  imgUrl,
}: ProjectData) {
  return (
    <div className="flex overflow-hidden rounded-md border-2 border-slate-300 p-6">
      <div className="flex w-full flex-row space-x-12">
        <div className="flex justify-center items-center">
          <Image
            src={imgUrl}
            alt="project"
            width={600}
            height={600}
            className="z-1"
          />
        </div>
        <div className="flex w-11/12 flex-col">
          <div className="flex flex-row items-center justify-between text-center">
            <p className="text-2xl font-bold">
              <a href={url}>{title}</a>
            </p>
            <p className="text-lg font-bold">{date}</p>
          </div>
          <p className="font-md text-start font-semibold">{description}</p>
          <div className="mt-[158px] flex justify-center">
            {tools.map((item, index) => {
              return (
                <span
                  key={index}
                  className="mx-2 rounded-md border border-slate-300 p-2 px-4"
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <Meteors number={20} className="relative" />
    </div>
  );
}
