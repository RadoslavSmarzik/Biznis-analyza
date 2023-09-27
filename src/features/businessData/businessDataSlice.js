import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: 0,
}

export const businessDataSlice = createSlice({
  name: 'businessData',
  initialState,
  reducers: {

    setData: (state, action) => {
        state.data = action.payload
    },

    addRecord: (state, action) => {
      state.data.balance.push(action.payload)
      state.data.salesTotal = (parseFloat(state.data.salesTotal) + action.payload.salesAmount).toFixed(2)
      state.data.costsTotal = (parseFloat(state.data.costsTotal) + action.payload.costsAmount).toFixed(2)
      state.data.balance.sort((a, b) => a.month.localeCompare(b.month))
    },

    deleteRecord: (state, action) => {
      const index = action.payload
      state.data.salesTotal = (state.data.salesTotal - state.data.balance[index].salesAmount).toFixed(2)
      state.data.costsTotal = (state.data.costsTotal - state.data.balance[index].costsAmount).toFixed(2)
      state.data.balance.splice(index,1)
    },

    updateRecord: (state, action) => {
      const {id, month, salesAmount, costsAmount} = action.payload
      state.data.salesTotal = (state.data.salesTotal - state.data.balance[id].salesAmount + salesAmount).toFixed(2)
      state.data.costsTotal = (state.data.costsTotal - state.data.balance[id].costsAmount + costsAmount).toFixed(2)
      state.data.balance[id] = { month, salesAmount, costsAmount, costsTax: costsAmount * 0.2, salesTax: salesAmount * 0.2}
      state.data.balance.sort((a, b) => a.month.localeCompare(b.month))
    }

  },
})

export const { setData, addRecord, deleteRecord, updateRecord } = businessDataSlice.actions

export default businessDataSlice.reducer