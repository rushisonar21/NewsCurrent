import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
  
  constructor(){
    super();
    this.pageSize=15;
    this.state={
      news_articles : [],
      loading: false,
      pageNumber: 1,
      totalResults:0,
    }
    
  }
  FetchNewsApi = async ()=>{
    this.setState({loading: true})
    document.title = `NewsCurrent - ${((this.props.category).charAt(0)).toUpperCase()+(this.props.category).slice(1)}`
    try{
      let response = await fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.category}&pageSize=${this.pageSize}&page=${this.state.pageNumber}&apiKey=${this.props.api_key}`)
      if(response.status===200){
        let data = await response.json()
        this.setState({news_articles: data.articles,loading: false, totalResults: data.totalResults})
      }
      else{
          this.setState({news_articles: ["Backend is down"]})
      }
    }
    catch(error){
      console.log("error from fetchNewsApi",error)
    }
    }

  componentDidMount(){
    this.FetchNewsApi()
  }
  fetchMoreData = async ()=>{
    this.setState({loading: true})
    document.title = `NewsCurrent - ${((this.props.category).charAt(0)).toUpperCase()+(this.props.category).slice(1)}`
    try{
      let response = await fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.category}&pageSize=${this.pageSize}&page=${this.state.pageNumber+1}&apiKey=${this.props.api_key}`)
      if(response.status===200){
        let data = await response.json()
        this.setState({news_articles: this.state.news_articles.concat(data.articles),pageNumber: this.state.pageNumber+1,loading: false})
      }
      else{
        this.setState({loading:false})
        let info = document.createElement("h5")
        info.innerText = "Cant refresh data! Backend down"
        info.setAttribute("class","text-center")
        let row = document.querySelector("#newselementrow")
        row.appendChild(info)
      }
    }
    catch(error){
      console.log("error from fetchNewsApi",error)
    }
    }

  render() {
    return (
      <div className='container' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h3 className='title m-3'>Top {((this.props.category).charAt(0)).toUpperCase()+(this.props.category).slice(1)} Headlines</h3>
        <div className='loader'>
        {this.state.loading && <Spinner/>}
        </div>
        <InfiniteScroll
          dataLength={this.state.news_articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.news_articles.length<this.state.totalResults}
          loader={this.state.loading && <Spinner/>}
        >
        <div className="container">
        <div className="row" id="newselementrow">
          {this.state.news_articles.map((element,index)=>{
            if(element==="Backend is down"){
              return <h1 key="serverDown">Backend is down</h1>
            }
            return <div className="col-md-4" key={index+element.url}>
            <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} img_url={element.urlToImage} news_url={element.url} date={element.publishedAt?element.publishedAt:"00:00:00"} author={element.author?element.author:"unknown"} source = {element.source.name?element.source.name:"unknown"}/>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News
