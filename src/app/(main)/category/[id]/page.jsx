import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();

  const news = await getNewsByCategoryId(id);

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto w-full gap-4 my-15">
      <div className="font-bold col-span-3">
        <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
      </div>

      <div className="font-bold col-span-6">
        <h2 className="font-bold text-lg">News By Category</h2>

        <div className="space-y-4 mt-6">
          {news.map((news) => {
            return <NewsCard key={news._id} news={news}></NewsCard>;
          })}
        </div>
      </div>

      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
