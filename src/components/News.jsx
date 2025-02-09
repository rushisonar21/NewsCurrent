import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';


export class News extends Component {
  
  constructor(){
    super();
    this.maxPage=0;
    this.pageSize=16;
    this.state={
      news_articles : [],
      loading: false,
      pageNumber: 1,
    }
    
  }
  async componentDidMount(){
    this.setState({loading: true})
    let response = await fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.category}&pageSize=${this.pageSize}&page=1&apiKey=${this.props.api_key}`)
    if(response.status===200){
    let data = await response.json()
    this.maxPage = Math.ceil(data.totalResults/this.pageSize)
    this.setState({news_articles: data.articles,loading: false})
    }
    else{
      this.setState({news_articles: ["Backend is down"]})
    }
  }
  next = async ()=>{
    this.setState({loading: true})
    let response = await fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.category}&pageSize=${this.pageSize}&page=${this.state.pageNumber+1}&apiKey=${this.props.api_key}`)
    let data = await response.json()
    this.setState({news_articles: data.articles, pageNumber: this.state.pageNumber+1,loading: false})
  }
  prev = async ()=>{
    this.setState({loading: true})
    let response = await fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.category}&pageSize=${this.pageSize}&page=${this.state.pageNumber-1}&apiKey=${this.props.api_key}`)
    let data = await response.json()
    this.setState({news_articles: data.articles, pageNumber: this.state.pageNumber - 1,loading: false})
  }
  render() {
    return (
      <div className='container' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h3 className='title m-3'>Top Headlines</h3>
        <div className='loader'>
        {this.state.loading && <Spinner/>}
        </div>
        <div className="row">
          {this.state.news_articles.map(element=>{
            if(element==="Backend is down"){
              return <h1 key="serverDown">Backend is down</h1>
            }
            return !this.state.loading && <div className="col-md-4" key={element.url}>
            <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} img_url={element.urlToImage} news_url={element.url} date={element.publishedAt?element.publishedAt:"00:00:00"} author={element.author?element.author:"unknown"} source = {element.source.name?element.source.name:"unknown"}/>
            </div>
          })}
        </div>
        <div className="btn-group mb-2" role="group" >
          <button type="button" className="btn btn-primary" disabled={this.state.pageNumber>1?false:true} onClick={this.prev}><i className="fa-solid fa-arrow-left"></i> Prev</button>
          <button type="button" className="btn btn-primary mx-2" disabled={this.state.pageNumber<this.maxPage?false:true} onClick={this.next}>Next <i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    )
  }
}

export default News
