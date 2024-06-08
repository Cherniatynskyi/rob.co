import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import { getNewThunk, getTopSalesThunk, getCategoryThunk } from "./operations";

const handlePending = (state) => {
    state.isLoading = true
}

const handleFulfilledGetNew = (state,{payload}) => {
    state.isLoading = false
    state.newItems = payload
    state.error = ''
}

const handleFulfilledGetTopSales = (state,{payload}) => {
    state.isLoading = false
    state.topItems = payload
    state.error = ''
}

const handleFulfilledGetCategory = (state,{payload}) => {
    state.isLoading = false
    state.items = payload
    state.error = ''
}


const handleRejected = (state,{payload}) => {
    state.error = payload
    state.isLoading = false
    console.log('error')
}

export const ItemsSlice = createSlice({
    name: 'items',
    initialState: {
        newItems: [],
        topItems: [],
        items:[],
        cartItems: [],
        isLoading: false,
        error: '',
        filters: {
            category: 'all',
            pricemin: '0',
            pricemax: '30000',
            color: 'all'
        },
        page: 1
    },
    reducers:{
        setFilter: (state, {payload})=>{
            state.filters[payload.filter] = payload.value
        },
        incPage: (state)=>{
            state.page = state.page + 1
        },
        decPage: (state)=>{
            state.page = state.page - 1
        },
        addCartItem: (state, {payload})=>{
            state.cartItems.push(payload)}
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getNewThunk.fulfilled, handleFulfilledGetNew)
        .addCase(getTopSalesThunk.fulfilled, handleFulfilledGetTopSales)
        .addCase(getCategoryThunk.fulfilled, handleFulfilledGetCategory)
        .addMatcher(isAnyOf(getNewThunk.pending, getTopSalesThunk.pending, getCategoryThunk.pending), handlePending)
        .addMatcher(isAnyOf(getNewThunk.rejected, getTopSalesThunk.rejected, getCategoryThunk.rejected), handleRejected)
    }
})

export const {setFilter, incPage, decPage, addCartItem} = ItemsSlice.actions