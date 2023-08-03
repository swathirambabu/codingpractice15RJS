// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  getReviews = reviewsList => {
    const {activeReviewIndex} = this.state
    const {imgUrl, companyName, description, userName} = reviewsList[
      activeReviewIndex
    ]

    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} className="image" alt={userName} />
        <h1 className="user-name ">{userName}</h1>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props

    return (
      <div className="app-container">
        <button
          data-testid="leftArrow"
          type="button"
          className="button"
          onClick={this.onClickLeftArrow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        {this.getReviews(reviewsList)}
        <button
          data-testid="rightArrow"
          type="button"
          className="button"
          onClick={this.onClickRightArrow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="left arrow"
          />
        </button>
      </div>
    )
  }
}
export default ReviewsCarousel
