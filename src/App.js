import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
// Replace your code here

class App extends Component {
  state = {wordsList: [], textInput: ''}

  onchangeInput = e => {
    this.setState({textInput: e.target.value})
  }

  onClickAdd = () => {
    const {textInput} = this.state
    const newList = {textInput, id: uuidv4()}
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newList],
      textInput: '',
    }))
  }

  displayView = () => {
    const {textInput, wordsList} = this.state

    if (wordsList.length < 1) {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
          style={{width: '350px', marginTop: '30px'}}
          alt="no user inputs"
        />
      )
    }

    return wordsList.map(item => (
      <li key={item.id}>
        <p>{`${item.textInput}: ${item.textInput.length}`}</p>
      </li>
    ))
  }

  render() {
    const {textInput, wordsList} = this.state
    console.log(wordsList)
    return (
      <div className="main_div">
        <div className="left_div">
          <h1> Count the characters like a Boss...</h1>
          <ul>{this.displayView()}</ul>
        </div>
        <form className="right_div" onSubmit={this.onClickAdd}>
          <h1> Character Counter</h1>
          <input
            type="text"
            placeholder="Enter the characters here"
            value={textInput}
            onChange={this.onchangeInput}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
export default App
