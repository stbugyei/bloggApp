import React, { Component } from "react";
//import PropTypes from "prop-types";

export class TodoItem extends Component {

  render() {

    const { id, title, category } = this.props.post;
    return (
      
      <div className='card_content'>
            <div className='card_content_item'>Title: {title}</div> 
            <div className='card_content_item'>Category: {category}</div>       
        <div className='card_content_item'>
          <button className='btn'
            onClick={this.props.delPost.bind(this, id)} >
            {" "}
            Delete{" "}
            </button>
          </div>
        </div>
    );
  }
}

/* <input className='css-checkbox' id='item'
            type="checkbox"
            onChange={this.props.checkCompleted.bind(this, id)}
          />{" "}<label className = 'css-label' htmlFor="item">{title}</label>
         {" "}*/

//======== creating propTypes==============
/*TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  checkCompleted: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};*/


export default TodoItem;
