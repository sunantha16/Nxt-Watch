import React from 'react'

const CartContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  addToSaveVideos: () => {},
  activeTabItem: () => {},
  activeTab: '',
  onChangeThame: () => {},
  removeSaveVideos: () => {},
})

export default CartContext
