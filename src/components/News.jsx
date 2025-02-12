import React, { useEffect, useRef, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

  let pageSize = 15;
  let [newsArticles, setNewsArticles] = useState([])
  let [loading, setLoading] = useState(false)
  let [pageNumber, setPageNumber] = useState(1)
  let totalResults = useRef(0)

  const FetchNewsApi = async () => {
    props.updateProgress(30)
    setLoading(true)
    document.title = `NewsCurrent - ${((props.category).charAt(0)).toUpperCase() + (props.category).slice(1)}`
    try {
      let response = await fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&pageSize=${pageSize}&page=${pageNumber}&apiKey=${props.api_key}`)
      if (response.status === 200) {
        props.updateProgress(50)
        let data = await response.json()
        setNewsArticles(data.articles)
        setLoading(false)
        totalResults.current = data.totalResults
        props.updateProgress(100)
      }
      else {
        setNewsArticles(["Backend is down"])
      }
    }
    catch (error) {
      console.log("error from fetchNewsApi", error)
    }
  }

  useEffect(() => {
    FetchNewsApi()
  },[])

  const fetchMoreData = async () => {
    setLoading(true)
    document.title = `NewsCurrent - ${((props.category).charAt(0)).toUpperCase() + (props.category).slice(1)}`
    try {
      let response = await fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&pageSize=${pageSize}&page=${pageNumber + 1}&apiKey=${props.api_key}`)
      if (response.status === 200) {
        let data = await response.json()
        setNewsArticles(newsArticles.concat(data.articles))
        setLoading(false)
        setPageNumber(p => p + 1)
      }
      else {
        setLoading(false)
        let info = document.createElement("h5")
        info.innerText = "Cant refresh data! Backend down"
        info.setAttribute("class", "text-center")
        let row = document.querySelector("#newselementrow")
        row.appendChild(info)
      }
    }
    catch (error) {
      console.log("error from fetchNewsApi", error)
    }
  }

  return (
    <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 className='title' style={{marginTop:"90px"}}>Top {((props.category).charAt(0)).toUpperCase() + (props.category).slice(1)} Headlines</h3>
      <div className='loader'>
        {loading && <Spinner />}
      </div>
      <InfiniteScroll
        dataLength={newsArticles.length}
        next={fetchMoreData}
        hasMore={newsArticles.length < totalResults.current}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row" id="newselementrow">
            {newsArticles.map((element, index) => {
              if (element === "Backend is down") {
                return <h1 key="serverDown">Backend is down</h1>
              }
              return <div className="col-md-4" key={index + element.url}>
                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} img_url={element.urlToImage} news_url={element.url} date={element.publishedAt ? element.publishedAt : "00:00:00"} author={element.author ? element.author : "unknown"} source={element.source.name ? element.source.name : "unknown"} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default News
