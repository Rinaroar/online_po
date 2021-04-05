import React, { Component } from 'react';

import moveez from '../img/yourmoveez.png';
import pdo from '../img/crud_pdo.png';
import wall from '../img/wall.png';
import sunny from '../img/sunny.png';
import aroma from '../img/aroma.png';
import noo from '../img/noo.png';
import extra from '../img/extra.png';
import sogood from '../img/sogood.png';
import signal from '../img/signal.png';

const ProjectData = [
  {
    "category": "Product Management",
    "title": "Startup Consulting",
    "text": "",
    "image": noo,
    "link":""
  },
  {
    "category": "Product Management",
    "title": "Hospital Activities Management",
    "text": "",
    "image": extra,
    "link":""
  },
  {
    "category": "Product Management",
    "title": "Aroma Water",
    "text": "Mineral water launch for young senior",
    "image": aroma,
    "link": "https://www.figma.com/proto/feZiJyWqHdTyvQWBoZe6bc/Brief-Parfait?node-id=159%3A6&scaling=scale-down-width"
  },
  {
    "category": "Product Management",
    "title": "SoGood Magazine Website",
    "text": "Mineral water launch for young senior",
    "image": sogood,
    "link": "https://www.figma.com/proto/feZiJyWqHdTyvQWBoZe6bc/Brief-Parfait?node-id=159%3A6&scaling=scale-down-width"
  },
  {
    "category": "Product Management",
    "title": "Signalisation at School",
    "text": "Mineral water launch for young senior",
    "image": signal,
    "link": "https://www.figma.com/proto/feZiJyWqHdTyvQWBoZe6bc/Brief-Parfait?node-id=159%3A6&scaling=scale-down-width"
  },
  {
    "category": "Front-End Developement",
    "title": "Your Moveez",
    "text": "PWA, find and add a movie to your favorites",
    "image": moveez,
    "link": "https://rinaroar.github.io/popcorntime_js/"
  },
  {
    "category": "Front-End Developement",
    "title": "Weather App",
    "text": "Check the weather wherever you are",
    "image": sunny,
    "link": "https://github.com/Rinaroar/app_meteo"
  },
  {
    "category": "Back-End Developement",
    "title": "Movie DB ",
    "text": "Using PDO to CRUD a movie Database",
    "image": pdo,
    "link": "https://github.com/Rinaroar/crud_pdo"
  },
  {
    "category": "Back-end Developement",
    "title": "The Wall ",
    "text": "Using PDO to CRUD a collaborative Wall",
    "image": wall,
    "link": "https://github.com/Rinaroar/wall_from_scratch"
  }
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
      <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="button button-primary">
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
        <h2 className="category">{category}</h2>
        <h3 className="title">{this.props.title}</h3>
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
