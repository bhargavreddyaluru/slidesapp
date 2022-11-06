import React from 'react'

const SlideContext = React.createContext({
  initialList: [],
  activeTab: 'cc6e1752-a063-11ec-b909-0242ac120002',
  activeIndex: 0,
  changeActiveTab: () => {},
  addNewItem: () => {},
  changeHeading: () => {},
  ChangeDescription: () => {},
})

export default SlideContext
