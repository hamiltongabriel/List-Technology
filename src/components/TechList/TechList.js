import React, { Component } from 'react'
import TechItem from './TechItem'

class TechList extends Component {

  state = {
    newTech: '',
    techs: []
  }

  /**
   * Ciclo de vida
   */
  componentDidMount () {
    const techs = localStorage.getItem('techs')

    if (techs) {
      this.setState({ techs: JSON.parse(techs) })
    }
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log(prevProps)
    console.log(prevState)
    console.log(snapshot)
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  handleInputChange = e => {
    if (!e) {
      return
    }
    this.setState({ newTech: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    })
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech =>
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          )}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type={'submit'}>Enviar</button>
      </form>
    )
  }
}

export default TechList
