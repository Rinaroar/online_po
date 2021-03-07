import React, { Component } from 'react';

import pink from '../img/pink_bc.jpg';
import moveez from '../img/moveez.png';
import pdo from '../img/crud_pdo.png';
import wall from '../img/wall.png';
import sunny from '../img/sunny.jpg';

const ProjectData = [
  {
    "category": "FRONT-END",
    "title": "Your Moveez",
    "text": "PWA, find and add a movie to your favorites",
    "image": moveez,
    "link": "https://rinaroar.github.io/popcorntime_js/"
  },
  {
    "category": "FRONT-END",
    "title": "Weather App",
    "text": "Check the weather wherever you are (in progress)",
    "image": sunny,
    "link": "https://github.com/Rinaroar/app_meteo"
  },
  {
    "category": "BACK-END",
    "title": "Movie DB ",
    "text": "Using PDO to CRUD a movie Database",
    "image": pdo,
    "link": "https://github.com/Rinaroar/crud_pdo"
  },
  {
    "category": "BACK-END",
    "title": "The Wall ",
    "text": "Using PDO to CRUD a collaborative Wall",
    "image": wall,
    "link": "https://github.com/Rinaroar/wall_from_scratch"
  },
  {
    "category": "FULLSTACK",
    "title": "Yoga App",
    "text": "Daily Yoga PWA for training (in progress)",
    "image": pink,
    "link": "https://github.com/Rinaroar/yogapp"
  },
]

class Card extends Component {
  constructor() {
    super();

    this.state = {
      posts: {}
    }
  }
  componentWillMount() {
    this.setState({
      posts: ProjectData
    });
  }

  render() {
    return <div className="app-card-list">
        {
          Object
          .keys(this.state.posts)
          .map(key => <CardContent key={key} index={key} details={this.state.posts[key]}/>)
        }
    </div>
  }
}

class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = {
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} className="card-header">
      </header>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <a href={this.props.link}  target="_blank" rel="noopener noreferrer" className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </a>
    )
  }
}

class CardBody extends React.Component {
  render() {
    const { category} = this.props;
    return (
      <div className="card-body">
        <h2>{this.props.title}</h2>
        <h3 className="category">{category}</h3>
        <p className="body-content">{this.props.text}</p>
        <Button link={this.props.link}/>
      </div>
    )
  }
}

class CardContent extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader image={this.props.details.image}/>
        <CardBody title={this.props.details.title} category={this.props.details.category} text={this.props.details.text} link={this.props.details.link}/>
      </article>
    )
  }
}

export default Card
