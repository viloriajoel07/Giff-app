import useFetchGif from "../hooks/useFetchGif";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const { gif, isLoading } = useFetchGif(category);

  return (
    <>
      {isLoading && <h2>cargando...</h2>}
      <h2 className="w-full text-5xl font-bold text-center py-8">{category}</h2>
      <div className="w-full h-full flex flex-wrap gap-4 justify-center bg-gray-200 py-10 rounded-2xl">
        {gif.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
