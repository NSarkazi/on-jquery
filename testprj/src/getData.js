import React from 'react';

class GetData extends React.Component {
  constructor(props){
    super(props);
    this.state = { data: [] };
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
     retun()
   }
}

// export default GetData