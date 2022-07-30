import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

const GifList = ({ category }) => {
    const { data: gifs, loading } = useFetchGifs(category)
    if(!category) return null;

    return (
        <div>
            <h3>{category}</h3>
            {
                loading && ( <p>Loading...</p> )
            }
            <ol className="card-list">
                {gifs.map((gif) => (
                    <GifItem key={gif.id} gif={gif} />
                ))}
            </ol>
        </div>
    );
};

export default GifList;
