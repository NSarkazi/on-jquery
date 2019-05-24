import React from 'react';
import s from './style.module.css';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.surname = React.createRef();
    this.company = React.createRef();
    this.state = {isEdit: false};
    this.toggleState = () =>
      this.setState({ isEdit: !this.state.isEdit })
  }
   
  render() {
    if (this.state.isEdit) {
      return (
        <tr>
           <td>{this.props.id}</td>
           <td><input type="text" defaultValue={this.props.name} ref={this.name} /></td>
           <td><input type="text" defaultValue={this.props.surname} ref={this.surname} /></td>
           <td><input type="text" defaultValue={this.props.company} ref={this.company} /></td>
           <td><button onClick={this.toggleState}>Cancel</button></td>
           <td><button className={s.save} onClick={() => this.props.saveBtn(this.props.id,
                                                          this.name.current.value,
                                                          this.surname.current.value,
                                                          this.company.current.value)}>Save</button></td>
         </tr>
      )
    } else {
      
        return ( 
          <tr>
            <td>{this.props.id}</td>
            <td>{this.props.name}</td>
            <td>{this.props.surname}</td>
            <td>{this.props.company}</td>
            <td><button className={s.edit} onClick={this.toggleState}>Edit</button></td>
            <td><button className={s.del} onClick={() => this.props.delBtn(this.props.id)}>Del</button></td>
            {/* <td><button onclick={confirm('are u shure?') ? this.props.delBtn(this.props.id) : {this.toggleState}}>Del</button></td> */}
          </tr>
        )
      
    }

  }
}

export default TableRow;
