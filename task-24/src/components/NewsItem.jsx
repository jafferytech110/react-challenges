import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date } = this.props;
    return (
      <div className="my-4">
        <div className="card">
          <img src={!imageUrl?'https://repository.mountathos.org/jspui/image/no-image.jpg':imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-info">{date}</p>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-dark">
              Aur Parho
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
