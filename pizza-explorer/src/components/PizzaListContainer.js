import * as React from 'react'
import PizzaList from './PizzaList'
import { connect } from 'react-redux'

class PizzaListContainer extends React.Component {
  selectPizza(id) {
    console.log('selected pizza:', id)
  }

  render() {
    console.log(this.props.pizzas)
    return <PizzaList pizzas={this.props.pizzas} selectPizza={this.selectPizza} />
  }
}

const mapStateToProps = (state) => {
  return {
    pizzas: state
  }
}


export default connect(mapStateToProps)(PizzaListContainer)