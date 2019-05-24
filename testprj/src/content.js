import React from 'react';
import React, { Component } from 'react';

import jquery from "jquery";
 
class Content extends React.Component {
   constructor() {
       super()
       this.state = {
           data: []
       }
   }
   componentDidMount() {

    
    jquery.ajax({
           url: "http://localhost:3012/List",
           type: "GET",
           dataType: 'json',
           ContentType: 'application/json',
           success: function (data) {
              console.log("data",data);
               this.setState({data: data});
           }.bind(this),
           error: function (jqXHR) {
               console.log(jqXHR);
           }
       })
   }
       



   render() {
       return (
         <div>
            <Table>
               




            </Table>
              {this.state.data.map((item, i) =>
              <Item key={i} value={item} />
              )}
          
         </div>
            
         
       )
   }
}

  
// class Item extends Component {
//   render() {
//     return <li>
//       <a href={this.props.value.link}>{this.props.value.name}</a>
//     </li>;
//   }
// }
  
export default Content


