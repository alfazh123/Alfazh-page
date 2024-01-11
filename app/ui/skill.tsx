interface SkillProps {
  skill: string;
}

export default function Skill({ skill }: SkillProps) {
  return (
    <div className="flex flex-col border-solid border-2 border-slate-50 hover:bg-slate-50 hover:text-slate-900  w-40 h-10 items-center justify-center rounded-full">
      <h3 className="text-lg font-semibold">{skill}</h3>
    </div>
  );
}
