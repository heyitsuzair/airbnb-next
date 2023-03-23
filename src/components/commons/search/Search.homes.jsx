import React from "react";
import { ButtonIconned, TextSm } from "../index";

const SearchHomes = () => {
  return (
    <div className="bg-gray-100 rounded-full w-8/12 mx-auto mt-10">
      <div className="flex items-center justify-between">
        <div className="hover:bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer py-2.5 px-8 h-full w-full rounded-full">
          <TextSm text="Where" classes="text-left" />
          <input
            placeholder="Search Destination"
            className="my-1 w-full bg-inherit text-sm"
          />
        </div>
        <div className="hover:bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer py-2.5 px-8 h-full w-full rounded-full">
          <TextSm text="Where" classes="text-left" />
          <input
            placeholder="Search Destination"
            className="my-1 w-full bg-inherit text-sm"
          />
        </div>
        <div className="p-2">
          <ButtonIconned text="Search" icon="fa-search" />
        </div>
      </div>
    </div>
  );
};

export default SearchHomes;
