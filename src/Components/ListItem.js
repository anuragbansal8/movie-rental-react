import React, { Component } from 'react';
import '../App.css';
import Button from './Button';

class ListItem extends Component {

    render(){
        return (
            <div>
                <li key={this.props.i}>
                  <img style={styles.imageStyle}src={this.props.item.imageUrl} alt=""/>
                  <span>{this.props.item.name}</span> 
                  <p style={{paddingLeft: 110}}>{this.props.item.snippet}</p> 
                  <Button 
                      toggleButton = {this.props.toggleButton}
                      toggleButton1 = {this.props.toggleButton1}
                      toggle = {this.props.i}
                      index = {this.props.index}
                  />
                </li>
            </div>
        )
    }
 
}

const styles = {
  imageStyle: {
    height: 100, 
    width: 100, 
    float:'left'
   }
}

export default ListItem;