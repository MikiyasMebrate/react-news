import { Link } from "react-router-dom";
import formattedDate from "../../Utility/formattedDate";

let Sport = ({data})=>{

    let latestSport = data.sport.map((sport) => (
        <div key={sport.id} className="item col-md-3">
        <div className=" news-post article-post">
            <div className="image-holder">
                <img src={`http://127.0.0.1:8000/media/${sport.image}`} alt="news-img" />
            </div>
            <Link className="text-link" to={`/blogs${sport.id}`}>{sport.category__title}</Link>
            <h2><Link to={`/blog/${sport.id}`}>{sport.title}</Link></h2>
            <ul className="post-tags">
                <li>{formattedDate(sport.created)}</li>
                <li><Link to={`/blog/${sport.id}`}>3 comments</Link></li>
                <li>by <Link to={`/blog/${sport.id}`}>Guest</Link></li>
            </ul>
        </div>
    </div>

    ))

    return(
        <>
         <section className="fresh-section on-trend-mode">
			<div className="container">
				<div className="title-section text-center">
					<h1>Sport</h1>
				</div>
				<div className="fresh-box owl-wrapper">
					
					<div className="row" data-num="2">
                        {latestSport}
					</div>
				</div>
			</div>
		</section>
        </>
    );
}

export default Sport