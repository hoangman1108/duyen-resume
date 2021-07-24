import React, { Component } from 'react';

class Website extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.website.map(function(projects){
        var projectImage = 'images/website/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} target="_blank" title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio" style={{paddingTop: "10px"}}>

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some Website In My Work</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Website;