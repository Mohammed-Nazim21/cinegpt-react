import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // const [trailerId, setTrailerId] = useState(null);
  // fetch trailer here
  // to fetch the trailer will require the movie id

  //fetching the trailer video and updating the store
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json);

    const filterData = json.results?.filter(
      (video) => video.name === "Official Trailer"
    );

    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);

    // setTrailerId(trailer.key);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
