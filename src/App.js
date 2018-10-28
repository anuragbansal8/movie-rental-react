import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListItem from './Components/ListItem'

class App extends Component {

  state = {
    movieCount: 0,
    reservedCount: 0,
    data: [],
    index: false
  }

  componentDidMount() {
 
    axios.get('https://movie-rental-51a59.firebaseio.com/movies.json')
      .then((response)=>{
        var data = response.data
          this.setState({
            data: data
          })
      })
  }

  toggleButton = (i) => {
       var count = this.state.reservedCount-1
    this.setState({reservedCount: count, index: false })
  }
  toggleButton1 = (i) => {  
       var count = this.state.reservedCount+1
    this.setState({reservedCount: count, index: i })
  }

  renderList() {
      
        return this.state.data.map((item, i) =>
        {
          return( 
           <ListItem 
              key = {i}
              item = {item}
              i = {i}
              toggle = {this.state.toggle}
              toggleButton = {()=>this.toggleButton(i)}
              toggleButton1 = {()=>this.toggleButton1(i)}
              index = {this.state.index}
           />
        )
          }
        )
  }

  render() {
    
    return (
      <div className='container-fluid'>
      <div className='row'>

        <div className='col-md-2'>
          <p style={styles.paragraphStyle}> The total number of movies : {this.state.data.length} </p>
          <p style={styles.paragraphStyle}> Number of movies reserved : {this.state.reservedCount}</p>
        </div>

      
       <div className='col-md-10'>
            <ul>
              {this.renderList()}
            </ul>
      </div>
       
      </div>
      </div>
    )
  }
}

const styles = {
 paragraphStyle: {
   paddingLeft: 10,
   fontSize: 14,
 }
}

export default App;