import React, {useState,useEffect} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  
 
  const updateNews= async() => {
    setloading(true);
    props.setProgress(30);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a020cd9bdd654d3ea4b1323d8917eff9&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles);
    setloading(false);
    settotalResults(parsedData.totalResults);
    props.setProgress(100);
  }
  useEffect(() => {
    document.title= `${props.category} - NewsMonkey`;
     updateNews();
  }, []);
  
  
  const fetchMoreData = async() => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a020cd9bdd654d3ea4b1323d8917eff9&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };
  // prevButton = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  // nextButton = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };


    return (
      <>
              <h1 className="text-center" style={{margin:'35px 0px', marginTop:'80px'}}>News Monkey - Top Headlines for {props.category}</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          { articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title 
                      // ? element.title.slice(0, 45) 
                      // : ""
                    }
                    description={
                      element.description
                        // ? element.description.slice(0, 90)
                        // : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    publishedAt={element.publishedAt}
                    author={element.author?element.author:"Unknown"}
                    source={element.source.name}
                    colorr= {props.colorr}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.prevButton}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              Math.ceil(this.state.totalResults / this.props.pageSize) <
              this.state.page + 1
            }
            type="button"
            className="btn btn-dark"
            onClick={this.nextButton}
          >
            Next &rarr;
          </button>
        </div> */}
   </>
    );
  
}
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",

}
News.propTypes = {
 country: PropTypes.string,
 pageSize: PropTypes.number,
 category: PropTypes.string ,

}
export default News;
