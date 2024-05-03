import type { WorkerData } from "../../types/Worker";

export type OurTeamProps = {
  workers: WorkerData[];
};

export default function OurTeam(props: OurTeamProps) {
  return (
    <div className="flex flex-col flex-wrap mt-8 gap-4 md:gap-12 ">
      <span className="text-3xl font-thin text-text">Our Team</span>

      <div className="flex flex-wrap gap-8  justify-center">
        {props.workers.map((data, index) => {
          return (
            <a
              key={index}
              className="flex flex-col justify-center gap-3 cursor-pointer"
              href={data.github}
              target="_blank"
            >
              <img
                className=" w-24 h-24 hover:w-28 hover:h-28 md:w-56 md:h-56 md:hover:w-64 md:hover:h-64 ease-in-out duration-100"
                src={data.character}
              />
              <span className="text-center text-text">{data.nickname}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
