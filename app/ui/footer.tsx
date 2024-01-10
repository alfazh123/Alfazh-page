export default function Footer() {
  return (
    <div className="flex justify-between px-20">
      <h1 className="font-bold text-xl">Alfazh</h1>
      <ul className="flex justify-between w-60">
        <li className="hover:bg-slate-200 hover:text-slate-800 px-3 py-1 rounded-full">
          Home
        </li>
        <li className="hover:bg-slate-200 hover:text-slate-800 px-3 py-1 rounded-full">
          Blog
        </li>
        <li className="hover:bg-slate-200 hover:text-slate-800 px-3 py-1 rounded-full">
          About
        </li>
      </ul>
    </div>
  );
}
