import React from 'react';
// import jquery from "jquery";
import TableRow from './tableRow';
import s from './style.module.css';
import { getData, addRow, deleteRow, editRow } from './requestJQuery';

class Content extends React.Component {
   constructor(props) {
       super(props);
       this.name = React.createRef();
       this.surname = React.createRef();
       this.company = React.createRef();
       this.state = { data: [] };
  }

  componentDidMount() {
    getData(data => this.setState(data));
  }
    
   
  addBtn = () => {
    addRow(this.name.current.value,
      this.surname.current.value,
      this.company.current.value,
      data => this.setState(data));
  }

  delBtn = (id) => {
    deleteRow( id, 
    data => this.setState(data));
  }
    
  saveBtn =(id, name, surname, company)=> {
    editRow(id, name, surname, company,
    data => this.setState(data) )     
  }

render() { 
    return(
      <div >
        
        <table border="1" cellspacing="0">
          
         {this.state.data.map((item, i) =>              
          
            <TableRow id={item.id}
                      name={item.name} 
                      surname={item.surname}
                      company={item.company}
                      delBtn={this.delBtn}
                      saveBtn={this.saveBtn}/>  
         )}
         
         <tr>
           <td></td>
           <td><input type="text" defaultValue=' ' ref={this.name} /></td>
           <td><input type="text" defaultValue=' ' ref={this.surname} /></td>
           <td><input type="text" defaultValue=' ' ref={this.company} /></td>
           <td><button className={s.addBtn} onClick={this.addBtn}>add</button></td>
         </tr>
         
        </table>
           
        
      </div>
    )
  }
}
  export default Content;