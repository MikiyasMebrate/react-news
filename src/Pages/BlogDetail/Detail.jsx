import formattedDate from "../../Utility/formattedDate";

let Detail = ({ data }) => {
  let news = data.news[0];

  return (
    <section className="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="single-post">
              <div className="single-post-content">
                <img src="" alt="" />
                <div className="post-content">
                  <div className="post-social">
                    <span>Share</span>
                    <ul className="share-post">
                      <li>
                        <a href="#" className="facebook">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="pinterest">
                          <i className="fa fa-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-content-text">
                    <p>{news.category__title}</p>
                    <h1>{news.title}</h1>
                    <ul className="post-tags">
                      <li>{formattedDate(news.created)}</li>
                      <li>
                        <p>3 comments</p>
                      </li>
                    </ul>
                    <img
                    className="img-fluid"
                      src={`http://127.0.0.1:8000/media/${news.image}`}
                      alt=""
                    />
                    <p>{news.description}</p>
                    <div className="share-tags-box">
                      <ul className="tags">
                        <li>
                          <a href="#">travel</a>
                        </li>
                        <li>
                          <a href="#">adventure</a>
                        </li>
                        <li>
                          <a href="#">lifestyle</a>
                        </li>
                      </ul>
                      <ul className="shares-likes">
                        <li>
                          <a href="#" className="likes">
                            Like <i className="fa fa-heart-o"></i> 14
                          </a>
                        </li>
                        <li>
                          <a href="#" className="facebook">
                            <i className="fa fa-facebook"></i> 23
                          </a>
                        </li>
                        <li>
                          <a href="#" className="twitter">
                            <i className="fa fa-twitter"></i> 5
                          </a>
                        </li>
                        <li>
                          <a href="#" className="pinterest">
                            <i className="fa fa-pinterest"></i> 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="prev-next-box">
                  <div className="prev-box">
                    <a className="text-link" href="single-post.html">
                      <i className="fa fa-angle-left"></i> Previous Post
                    </a>
                    <h2>
                      <a href="single-post.html">
                        Sed adipiscing ornare risus.
                      </a>
                    </h2>
                  </div>
                  <div className="next-box">
                    <a className="text-link next-link" href="single-post.html">
                      Next Post <i className="fa fa-angle-right"></i>
                    </a>
                    <h2>
                      <a href="single-post.html">Quisque a lectus.</a>
                    </h2>
                  </div>
                </div>
                <div className="related-box">
                  <h2>Related Posts</h2>
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <div className="news-post standard-post text-left">
                        <div className="image-holder">
                          <a href="single-post.html">
                            <img src="" alt="" />
                          </a>
                        </div>
                        <a className="text-link" href="#">
                          Food
                        </a>
                        <h2>
                          <a href="single-post.html">
                            Fusce pellentesque suscipit.
                          </a>
                        </h2>
                        <ul className="post-tags">
                          <li>
                            by <a href="#">Stan Enemy</a>
                          </li>
                          <li>3 days ago</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="news-post standard-post text-left">
                        <div className="image-holder">
                          <a href="single-post.html">
                            <img src="" alt="" />
                          </a>
                        </div>
                        <a className="text-link" href="#">
                          Lifestyle
                        </a>
                        <h2>
                          <a href="single-post.html">Quisque a lectus. </a>
                        </h2>
                        <ul className="post-tags">
                          <li>
                            by <a href="#">Stan Enemy</a>
                          </li>
                          <li>3 days ago</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="news-post standard-post text-left">
                        <div className="image-holder">
                          <a href="single-post.html">
                            <img src="" alt="" />
                          </a>
                        </div>
                        <a className="text-link" href="#">
                          Travel
                        </a>
                        <h2>
                          <a href="single-post.html">
                            Vestibulum commodo tortor.
                          </a>
                        </h2>
                        <ul className="post-tags">
                          <li>
                            by <a href="#">Stan Enemy</a>
                          </li>
                          <li>3 days ago</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="advertise-box">
                <a href="#">
                  <img src="" alt="" />
                </a>
              </div>

              <div className="comments">
                <h2 className="comments-title">2 Comments</h2>
                <ul className="comments__list">
                  <li className="comments__list-item">
                    <img src="" alt="" />
                    <div className="comments__list-item-content">
                      <h3 className="comments__list-item-title">Philip W</h3>
                      <span className="comments__list-item-date">
                        Posted October 7, 2018
                      </span>
                      <a className="comments__list-item-reply" href="#">
                        <i className="la la-mail-forward"></i>
                        Reply
                      </a>
                      <p className="comments__list-item-description">
                        Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                        In nisi neque, aliquet vel, dapibus id, mattis vel,
                        nisi. Sed pretium, ligula sollicitudin laoreet viverra,
                        tortor libero sodales leo, eget blandit nunc tortor eu
                        nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                      </p>
                    </div>
                  </li>
                  <li className="comments__list-item">
                    <img src="" alt="" />
                    <div className="comments__list-item-content">
                      <h3 className="comments__list-item-title">Philip W</h3>
                      <span className="comments__list-item-date">
                        Posted October 7, 2018
                      </span>
                      <a className="comments__list-item-reply" href="#">
                        <i className="la la-mail-forward"></i>
                        Reply
                      </a>
                      <p className="comments__list-item-description">
                        Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                        In nisi neque, aliquet vel, dapibus id, mattis vel,
                        nisi. Sed pretium, ligula sollicitudin laoreet viverra,
                        tortor libero sodales leo, eget blandit nunc tortor eu
                        nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="widget social-widget">
                <ul className="social-list">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                      facebook
                      <span>25k likes</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                      twitter
                      <span>31k followers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                      instagram
                      <span>31k followers</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="widget category-widget">
                <h2>Categories</h2>
                <ul className="category-list">
                  <li>
                    <a href="#">
                      Travel <span>24</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Lifestyle <span>16</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Food <span>8</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="widget subscribe-widget2">
                <h2>Join Our Newsletter</h2>
                <p>
                  Sign up for our free newsletters to receive the latest news.
                  Don't worry we won't do spam.
                </p>
                <form className="subscibe-form">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email Address"
                  />
                  <input type="submit" id="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
