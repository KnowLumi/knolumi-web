import { earning } from "./process_helpers";
import { Avatar, Button } from "@material-tailwind/react";
import { MdArrowForward } from "react-icons/md";
const Earning = () => {
  return (
    <div className="flex flex-col h-fit mb-10">
      <h1 className="font-normal text-5xl">Earning</h1>
      <p className="w-[32rem] text-xs font-light tracking-wider mt-8">
        KnowLumi empowers you to secure internships, jobs, or even launch your
        own ventures. Seamlessly transition from education to real-world success
        by leveraging the skills and connections!
      </p>
      <ul className="mt-9 flex flex-col gap-6">
        {earning.map((item, i) => (
          <li key={`earning-${i}`} className="flex gap-3.5">
            {item.icon}
            <span className="font-light text-sm tracking-wider">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex gap-8 items-center mt-9">
        <Button className="rounded-full flex items-center gap-3 capitalize font-archivo font-medium text-[16px] bg-black text-white py-1 pr-1 pl-6">
          Explore Our Programs
          <i className="flex w-8 h-8 text-white -rotate-45 border border-[#0101010D] bg-[#FFFFFF4D] justify-center items-center rounded-full">
            <MdArrowForward />
          </i>
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex items-center -space-x-2">
            {new Array(3).fill("").map((_, i) => (
              <Avatar
                variant="circular"
                key={i}
                size="xs"
                alt="user 1"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
            ))}
          </div>
          <span className="font-medium text-[10px] md:text-xs underline">
            100+ successful students
          </span>
        </div>
      </div>
    </div>
  );
};

export default Earning;