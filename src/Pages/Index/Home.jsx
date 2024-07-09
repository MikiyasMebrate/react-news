import useFetch from "../../Hook/useFetch.jsx";
import Loading from "../Common/Loading.jsx";
import TradingPost from "./TradingPost.jsx";



let Home = () => {
  const [loading, data, error] = useFetch('http://127.0.0.1:8000/latest_post/')
  return (
    <>
    {loading && <Loading />}
    {data && <TradingPost data={data} />}
    </>
  );
};

export default Home;
