import Link from "next/link";
import ThemeToggler from "../ThemeToggler/index.js";

const Navigation = () => {
  return (
    <div className="w-2/12 flex flex-col text-2xl">
      <ThemeToggler />
      <Link href="/project/">
        <a href="#" className=" opacity-75 hover:opacity-100 py-1 font-bold">
          #projects
        </a>
      </Link>
      <a href="#" className=" opacity-75 hover:opacity-100 py-1 font-bold">
        #typescript
      </a>
      <a href="#" className=" opacity-75 hover:opacity-100 py-1 font-bold">
        #patterns
      </a>
      <a href="#" className=" opacity-75 hover:opacity-100 py-1 font-bold">
        #tools
      </a>
      <a href="#" className=" opacity-75 hover:opacity-100 py-1 font-bold">
        #contact
      </a>
    </div>
  );
};

export default Navigation;
