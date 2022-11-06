import {Component} from 'react'
import './index.css'
import SlideListItem from '../SlideListItem'
import SliderContext from '../../Context'
import Slide from '../Slide'

class Slides extends Component {
  render() {
    return (
      <SliderContext.Consumer>
        {value => {
          const {activeTab, initialList} = value
          console.log(initialList)
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlideListItem
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                    isActive={activeTab === eachSlide.id}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </SliderContext.Consumer>
    )
  }
}

export default Slides
