import { Link } from "react-router-dom";
import formattedDate from "../../Utility/formattedDate";

let Music = ({ data }) => {
  let latestMusic = data.music.map((music) => (
    <div key={music.id} className="item col-md-4">
      <div className=" news-post article-post">
        <div className="image-holder">
          <img
            className="img-fluid"
            src={`http://127.0.0.1:8000/media/${music.image}`}
            alt="news-img"
          />
        </div>
        <Link className="text-link" to={`/blogs${music.id}`}>
          {music.category__title}
        </Link>
        <h2>
          <Link to={`/blog/${music.id}`}>{music.title}</Link>
        </h2>
        <ul className="post-tags">
          <li>{formattedDate(music.created)}</li>
          <li>
            <Link to={`/blog/${music.id}`}>3 comments</Link>
          </li>
          <li>
            by <Link to={`/blog/${music.id}`}>Guest</Link>
          </li>
        </ul>
      </div>
    </div>
  ));



  return (
    <>
      <section className="fresh-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="title-section text-start">
                <h1>Music</h1>
              </div>
              <div className="fresh-box owl-wrapper">
                <div className="row" data-num="2">
                  {latestMusic}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Music;
