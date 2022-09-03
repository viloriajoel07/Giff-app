import PropTypes from "prop-types";

const GifItem = ({ title, url }) => {
  return (
    <div className="w-full sm:w-56 lg:w-80 flex flex-col items-center justify-center">
      <img src={url} alt={title} className="shadow-xl shadow-gray-600" />
      <p className="text-center font-bold py-4 text-xl">{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifItem;
