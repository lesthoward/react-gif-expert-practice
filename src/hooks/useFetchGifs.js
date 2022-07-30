import { useEffect, useState } from "react";
import getGif from "../helpers/getGifs";

const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGif(category)
        .then(data => setState({
            ...state,
            data,
            loading: false,
        }));
    }, [category, state])

    return state;
};

export default useFetchGifs;
