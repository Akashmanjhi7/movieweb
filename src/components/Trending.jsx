import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import axios from "../utils/Axios";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const [trending, settrending] = useState([]);
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        settrending((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("ERROR :", error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setpage(1);
      settrending([]);
      getTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  const Navigate = useNavigate();

  return trending.length > 0 ? (
    <div className=" w-screen  scroll-smooth    ">
      <div className="flex justify-between  w-full  items-center  px-[3%]  ">
        <h1 className=" text-zinc-300 text-3xl font-semibold">
          <i
            className="ri-arrow-left-line px-2 cursor-pointer"
            onClick={() => Navigate(-1)}
          ></i>
          Trending
        </h1>

        <div className="flex justify-center  items-center w-[80%]  overflow-hidden  ">
          <TopNav />
          <Dropdown
            title="Category"
            options={["all", "tv", "movies"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-8"></div>
          <Dropdown
            title="Duration"
            options={["day", "week"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        Loading={<Loading />}
      >
        <Cards data={trending} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
