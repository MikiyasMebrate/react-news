import formattedDate from "../../Utility/formattedDate";
import {Link} from 'react-router-dom'

let TradingPost = ({ data }) => {
  let lastOne = data.latest_post.slice(0,2).map((top)=>{
    return(
        <div key={top.id} className="news-post image-post">
        <img src={`http://127.0.0.1:8000/media/${top.image}/`} alt="" />
        <div className="hover-post">
          <Link className="category-link" to={`/blog/${top.id}`}>
            {top.category__title}
          </Link>
          <h2>
            <Link to={`/blog/${top.id}`}>{top.title}</Link>
          </h2>
          <ul className="post-tags">
            <li>{formattedDate(top.created)}</li>
            <li>
              <Link to={`/blog/${top.id}`}>2 comments</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  })

  let topLastFour = data.latest_post.slice(2, 6).map((latest) => {
    let img = `http://127.0.0.1:8000/media/${latest.image}/`;
    return (
      <>
        <div key={latest.id} className="col-md-6">
          <div className="news-post standard-post left-align">
            <div className="image-holder">
              <Link to={`/blog/${latest.id}`}>
                <img src={img} alt="blog-image" />
              </Link>
            </div>
            <Link className="text-link" to={`/blog/${latest.id}`}>
              {latest.category__title}
            </Link>
            <h2>
              <Link to={`/blog/${latest.id}`}>{latest.title}</Link>
            </h2>
            <ul className="post-tags">
              <li>
                by <Link to={`/blog/${latest.id}`}>Guest</Link>
              </li>
              <li>{formattedDate(latest.created)}</li>
            </ul>
          </div>
        </div>
      </>
    );
  });
  return (
    <section className="top-home-section">
      <div className="container">
        <div className="title-section text-center">
          <h1>Trending Posts</h1>
        </div>

        <div className="top-home-box">
          <div className="row">
          <div className="col-lg-6 col-md-12">
            {lastOne}
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row">{topLastFour}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingPost;
