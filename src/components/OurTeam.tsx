import type { WorkerData } from "../types/Worker";

export type OurTeamProps = {
    workers: WorkerData[]
};

export default function OurTeam(props: OurTeamProps) {
    return (
        <div className="flex flex-col mt-8 gap-12">
            <span className="text-3xl font-thin text-text">Our Team</span>

            <div className="flex gap-4 h-80 justify-between">
                {
                    props.workers.map((data, index) => {
                        return (
                            <a key={index} className="flex flex-col justify-center gap-3 cursor-pointer"
                                href={data.github} target="_blank">
                                <img className="w-56 h-56 hover:w-64 hover:h-64 ease-in-out duration-100" src={data.character} />
                                <span className="text-center text-text">{data.nickname}</span>
                            </a>
                        );
                    })
                }
            </div>
        </div>
    );
}