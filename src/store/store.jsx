import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import userIdReducer from './slices/userId'

export const store = configureStore({
  reducer: {
    userId:userIdReducer
  },
})
setupListeners(store.dispatch)

