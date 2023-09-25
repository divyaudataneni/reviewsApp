// Write your code here

import {Component} from 'react'

import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class ReviewsCarousel extends Component {
  state = {Count: 0}

  onRightArrowClick = () => {
    const {Count} = this.state

    if (Count < reviewsList.length - 1) {
      this.setState(prevState => ({Count: prevState.Count + 1}))
    }
  }

  onLeftArrowClick = () => {
    const {Count} = this.state

    if (Count > 0) {
      this.setState(prevState => ({
        Count: prevState.Count - 1,
      }))
    }
  }

  render() {
    const {Count} = this.state
    const result = reviewsList[Count]

    const {imgUrl, username, companyName, description} = result
    return (
      <>
        <div className="container">
          <h1 className="heading">Reviews</h1>
          <div className="review-cont">
            <button
              type="button"
              className="button"
              onClick={this.onLeftArrowClick}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
                alt="left arrow"
              />
            </button>

            <div className="profile-cont">
              <img src={imgUrl} alt={username} />
              <p className="name">{username}</p>
              <p className="company">{companyName}</p>
              <p className="des">{description}</p>
            </div>

            <button
              type="button"
              className="button"
              onClick={this.onRightArrowClick}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default ReviewsCarousel
