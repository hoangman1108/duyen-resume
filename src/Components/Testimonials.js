import React, { Component } from 'react';
import PhotoGraph from './Photograph';

class Testimonials extends Component {
   render() {

      if (this.props.data) {
         var testimonials = this.props.data.testimonials.map(function (testimonials) {
            return <li key={testimonials.user}>
               <blockquote>
                  <p>{testimonials.text}</p>
                  <cite>{testimonials.user}</cite>
               </blockquote>
            </li>
         })
      }

      return (
         <section id="testimonials">
            <div className="text-container">
               <div className="row">
                  {/* <div className="two columns header-col">
                     <h1><span>Client Testimonials</span></h1>
                  </div> */}

                  <div className="twelve columns flex-container">
                     <PhotoGraph data={this.props.content} />
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Testimonials;
