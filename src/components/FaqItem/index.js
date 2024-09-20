// Write your code here.
import React, {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isAnswerVisible: false,
  }

  toggleAnswer = () => {
    this.setState(prevState => ({
      isAnswerVisible: !prevState.isAnswerVisible,
    }))
  }

  render() {
    const {questionText, answerText} = this.props
    const {isAnswerVisible} = this.state

    return (
      <li className="faq-item">
        <div className="question-container" onClick={this.toggleAnswer}>
          <h2 className="question-text">{questionText}</h2>
          <img
            className="toggle-icon"
            src={
              isAnswerVisible
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={isAnswerVisible ? 'minus' : 'plus'}
          />
        </div>
        {isAnswerVisible && <p className="answer-text">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
