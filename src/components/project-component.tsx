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
    <div></div>
  );
}
