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
    <div className="flex overflow-hidden p-6 h-[250px] w-9/12 bg-opacity-60 rounded-md border-2 lg:w-full bg-bg-pattern border-zinc-300">
      <div className="flex flex-col gap-8 w-full md:flex-row">
        <Image
          src={imgUrl}
          alt="project"
          width={230}
          height={230}
          className="object-contain"
        />
        <div className="flex flex-col justify-between w-full">
          <div>
            <div className="flex flex-row justify-between items-center text-center">
              <p className="text-2xl font-bold">
                <a href={url}>{title}</a>
              </p>
              <p className="text-lg font-bold">{date}</p>
            </div>
            <p className="pt-4 font-semibold font-md text-start">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center w-full">
            {tools.map((item, index) => {
              return (
                <span
                  key={index}
                  className="p-2 px-4 text-sm rounded-md border border-zinc-300"
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      {/* <Meteors number={20} className="relative -z-10" /> */}
    </div>
  );
}
