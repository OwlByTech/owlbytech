import directus from "../lib/directus";
import { workers } from "../services/api";

export default function OurTeam() {
    return (
        <div className="flex flex-col mt-8 gap-12">
            <span className="text-3xl font-thin text-text">Our Team</span>

            <div className="flex gap-4">
            {
                workers.map((data, index) => {
                    return (
                        <div key={index} className="flex flex-col w-36 h-36 justify-center gap-3">
                            <img src={`${directus.url}assets/${data.character}`}></img>
                            <span className="text-text">{data.nickname}</span>
                        </div>
                    );
                })
            }
              </div>
        </div>
    );
}