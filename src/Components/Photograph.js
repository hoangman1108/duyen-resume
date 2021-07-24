import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
  'images/photo/photo_05.jpg',
  'images/photo/photo_06.jpg',
  'images/photo/photo_03.jpg',
  'images/photo/photo_04.jpg',
  'images/photo/photo_02.jpg',
  'images/photo/photo_01.jpg',
];
class PhotoGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const changeState = () =>{
      console.log('go here')
      this.setState({ isOpen: true })
    }
    if (this.props.data) {
      var projects = this.props.data.photo.map(function (projects) {
        var projectImage = 'images/photo/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <img alt={projects.title} src={projectImage} onClick={changeState} />
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio" style={{ paddingTop: "10px", background: 'none' }}>

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Film Photos.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}

              {isOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + images.length - 1) % images.length,
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % images.length,
                    })
                  }
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PhotoGraph;
