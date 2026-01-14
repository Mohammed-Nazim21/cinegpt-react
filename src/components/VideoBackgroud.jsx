import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

  useMovieTrailer(movieId);
  // Early return
  // if (trailerVideo === null) return;
  // const dispatch = useDispatch();
  // const [trailerId, setTrailerId] = useState(null);
  // fetch trailer here
  // to fetch the trailer will require the movie id

  //fetching the trailer video and updating the store
  // const getMovieVideos = async () => {
  //   const data = await fetch(
  //     `https://api.themoviedb.org/3/movie/${movieId}/videos`,
  //     API_OPTIONS
  //   );

  //   const json = await data.json();
  //   console.log(json);

  //   const filterData = json.results?.filter(
  //     (video) => video.name === "Official Trailer"
  //   );

  //   const trailer = filterData.length ? filterData[0] : json.results[0];
  //   console.log(trailer);

  //   // setTrailerId(trailer.key);
  //   dispatch(addTrailerVideo(trailer));
  // };

  // useEffect(() => {
  //   getMovieVideos();
  // }, []);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
