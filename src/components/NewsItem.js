
const NewsItem = (props) => {
 
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://static01.nyt.com/images/2022/02/03/multimedia/3xp-bezos/3xp-bezos-facebookJumbo.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <span className="position-absolute top-0  translate-middle badge rounded-pill " style={{ left: '90%', zIndex: '1', backgroundColor: 'red' }}>
              {source}
            </span>
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-mutet">
                By {author} at {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
