export default function Header() {
  return (
    <header className="flex mx-5 border-b-1 border-[#a5a5a5] pt-5 pb-2 justify-between ">
      <div className="flex flex-col  md:flex-row md:gap-4 md:items-center">
        <a className="cursor-pointer  font-artifika tracking-tighter  text-sm sm:text-base md:text-lg">
          Lazebnik Martin
        </a>
        <h2 className="font-mono tracking-tight text-xs sm:text-base md:text-sm">
          UX/UI REACT DEVELOPER
        </h2>
      </div>
      <div className="flex gap-3 font-mono items-center text-xs sm:text-base ">
        <button className="cursor-pointer">About</button>
        <button className="cursor-pointer">Projects</button>
        <button className="cursor-pointer">Contact</button>
      </div>
    </header>
  );
}
