import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import Image from "next/image";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto w-full gap-4 my-15">
      <div className="font-bold col-span-3">
        <LeftSideBar categories={categories} activeId={null}></LeftSideBar>
      </div>

      <div className="font-bold text-3xl bg-purple-200 col-span-6">
        All News
      </div>

      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
}
