import Image from "next/image";

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
    <div className="w-128 my-4 flex flex-row space-x-24 rounded-md border-2 border-slate-300 p-6">
      <div className="flex">
        <div className="flex items-center justify-center overflow-hidden rounded-md">
          <Image src={imgUrl} alt="project" width={400} height={400}></Image>
        </div>
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
  );
}
