import Skill from "./hobby/skill";
import CardHobby from "./hobby/card-hobby";
import { db } from "../lib/db";

export default function Hobby() {
    return (
        <div className="lg:grid lg:grid-cols-2 flex flex-col lg:space-y-0 space-y-4 gap-4 justify-center">
            <div className="p-2 border-solid border-2 rounded-md border-[#381E70] dark:border-[#EAF7DF] flex flex-col">
                <h1 className="font-bold text-2xl">Tech Stack</h1>
                <div className="flex justify-center items-center">
                    <Skill />
                </div>
            </div>
            {db.hobby.map((hobby) => (
                <CardHobby
                    key={hobby.title}
                    title={hobby.title}
                    description={hobby.description}
                    image={hobby.image}
                    link={hobby.link}
                />
            ))}
        </div>
    );
}
