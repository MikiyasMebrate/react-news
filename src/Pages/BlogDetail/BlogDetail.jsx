import { useParams } from "react-router-dom";
import Detail from "./Detail";
import useFetch from "../../Hook/useFetch";
import Loading from "../Common/Loading";




let BlogDetail = ()=>{
	let params = useParams()
	let [loading, data, error] = useFetch(`http://127.0.0.1:8000/news-single/${params.blogId}/`)
    return(
		<>
		{loading && <Loading />}
		{data && <Detail data={data} />}
		</>
    );
}

export default BlogDetail