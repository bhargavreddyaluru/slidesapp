import {Component} from 'react'
import './index.css'
import SliderContext from '../../Context'

class SlideListItem extends Component {
  render() {
    const {details, serialNumber, isActive} = this.props
    const {heading, description, id} = details
    const activeStyling = isActive ? 'active-styling' : null
    return (
      <SliderContext.Consumer>
        {value => {
          const {changeActiveTab} = value

          const onClickSlideTab = () => {
            changeActiveTab(id, serialNumber - 1)
          }

          return (
            <li
              className={`slide-list-item ${activeStyling}`}
              onClick={onClickSlideTab}
              testid={`slideTab${serialNumber}`}
            >
              <p className="slide-number">{serialNumber}</p>
              <div className="slide-tab">
                <h1 className="tab-heading">{heading}</h1>
                <p className="tab-description">{description}</p>
              </div>
            </li>
          )
        }}
      </SliderContext.Consumer>
    )
  }
}

export default SlideListItem
