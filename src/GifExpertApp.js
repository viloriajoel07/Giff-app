import { Icon } from "@iconify/react";
import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { FloatButton } from "./components/FloatButton";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;

    setCategories([category, ...categories]);
  };

  return (
    <main className="w-full h-full flex flex-col">
      <span id="anchor"></span>
      <header className="py-5 flex items-center flex-col md:flex-row justify-between bg-slate-800 px-8 md:px-20 rounded-b-2xl fixed w-full">
        <h3 className="text-white font-bold bg-none flex text-3xl mb-2 md:mb-0">
          GIFF APP
        </h3>
        <AddCategory onAddCategory={(category) => onAddCategory(category)} />
      </header>

      <div className="px-8 md:px-20 pb-8 pt-32 md:pt-20">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>

      <FloatButton />
    </main>
  );
};

export default GifExpertApp;
