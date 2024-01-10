import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto w-3/4  text-justify">
      <header className="relative  bg-slate-700 my-10 rounded-lg h-96 w-full">
        <div className="inset-x-0 bottom-0 absolute px-4 py-3 w-1/2 space-y-4">
          <h1 className="text-2xl font-bold">Hi, I'm Alfazh</h1>
          <p className="">
            I'm a Front End Engginer at Surabaya. Personally I'm using NextJS,
            Tailwind, MDX, I'm a self-taught developer and I love to learn new
            things. I'm currently learning at State University of Surabaya.
          </p>
        </div>
      </header>

      <div>
        <h3 className="text-lg font-semibold">Some Project</h3>
        <div></div>
      </div>
    </main>
  );
}
