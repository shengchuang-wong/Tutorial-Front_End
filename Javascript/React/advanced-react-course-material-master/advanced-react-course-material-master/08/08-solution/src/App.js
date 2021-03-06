import './index.css'
import React from 'react'
import PropTypes from 'prop-types'

class Select extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.any,
    defaultValue: PropTypes.any
  }

  state = {
    value: this.props.defaultValue,
    isOpen: false
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  isControlled() {
    return this.props.value != null
  }

  render() {
    const { isOpen } = this.state
    let label
    const children = React.Children.map(this.props.children, (child) => {
      // side effect in a map
      const { value } = this.isControlled() ? this.props : this.state
      if (child.props.value === value) {
        label = child.props.children
      }

      return React.cloneElement(child, {
        onSelect: () => {
          if (this.isControlled()) {
            this.props.onChange(child.props.value)
          } else {
            this.setState({ value: child.props.value })
          }
        }
      })
    })

    return (
      <div onClick={this.handleToggle} className="select">
        <div className="label">
          {label} <span className="arrow">▾</span>
        </div>
        {isOpen && (
          <div className="options">
            {children}
          </div>
        )}
      </div>
    )
  }
}


class Option extends React.Component {
  render() {
    return (
      <div className="option" onClick={this.props.onSelect}>
        {this.props.children}
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    selectValue: 'dosa'
  }

  setToMintChutney = () => {
    this.setState({
      selectValue: 'mint-chutney'
    })
  }

  render() {
    return (
      <div className="app">

        <div className="block">
          <h2>Uncontrolled</h2>
          <Select defaultValue="tikka-masala">
            <Option value="tikka-masala">Tikka Masala</Option>
            <Option value="tandoori-chicken">Tandoori Chicken</Option>
            <Option value="dosa">Dosa</Option>
            <Option value="mint-chutney">Mint Chutney</Option>
          </Select>
        </div>

        <div className="block">
          <h2>Controlled</h2>
          <p>
            <button onClick={this.setToMintChutney}>
              Set to Mint Chutney
            </button>
          </p>
          <Select
            value={this.state.selectValue}
            onChange={(selectValue) => {
              this.setState({ selectValue })
            }}
          >
            <Option value="tikka-masala">Tikka Masala</Option>
            <Option value="tandoori-chicken">Tandoori Chicken</Option>
            <Option value="dosa">Dosa</Option>
            <Option value="mint-chutney">Mint Chutney</Option>
          </Select>
        </div>
      </div>
    )
  }
}

export default App
