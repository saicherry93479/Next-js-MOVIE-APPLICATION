import Thumbnail from "./Thumbnail";

const Results = ({ resultss }) => {
  return (
    <div
      className="px-5 my-2 sm:grid md:grid-cols-2
     xl:grid-cols-3 3xl:flex flex-wrap justify-content "
    >
      {resultss.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
