import { useRouter } from "next/router";
import request from "../utils/request";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div
        className="flex px-10 sm:px-20 whitespace-nowrap  space-x-10
    sm:space-x-20 overflow-x-scroll scrollbar-hide"
      >
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transition duration-100 hover:scale-125
          hover:text-white active:text-red-500  last:pr-24 "
          >
            {title}
          </h2>
        ))}
      </div>
      <div
        className="absoulte top-0 right-0 
      bg-gradient-to-l from-[#06202A] h-10 w-100"
      ></div>
    </nav>
  );
};

export default Nav;
