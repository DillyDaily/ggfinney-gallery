import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OneItem from './OneItem';

class Shop extends Component {
  render () {
    console.log('Props from ALL ITEMS: ', this.props)
    let theItems = this.props.items.map(item => <OneItem key={item.id} item={item} />) 

    return (
      // <div></div>
      <div>{theItems}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

export default connect (mapStateToProps, null)(Shop)