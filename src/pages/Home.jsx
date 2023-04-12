import React from "react";
import TaskBar from "../components/TaskBar";
import Search from "../components/Search";
import Tasks from "../components/Tasks";

const Home = () => {
  return (
    <div className="grid grid-cols-[6rem_auto] w-screen h-screen max-w-screen max-h-screen overflow-x-hidden">
      <div className="flex flex-col gap-2 items-center border-r-2 border-gray-300/50">
        <TaskBar />
      </div>
      <div className="flex flex-col gap-4 px-8 pb-8 pt-2">
        <div>
          <Search />
        </div>
        <div className="flex flex-col items-center min-[850px]:items-stretch gap-4">
          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default Home;
