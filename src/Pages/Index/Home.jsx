import useFetch from "../../Hook/useFetch.jsx";
import Loading from "../Common/Loading.jsx";
import Music from "./Music.jsx";
import Sport from "./Sport.jsx";
import TradingPost from "./TradingPost.jsx";



let Home = () => {
  const [loading, data, error] = useFetch('http://127.0.0.1:8000/latest_post/')
  console.log(data)
  return (
    <>
    {loading && <Loading />}
    {data && <TradingPost data={data} />}
    {data && <Sport data={data} />}
    {data && <Music data={data} />}
    </>
  );
};

export default Home;
