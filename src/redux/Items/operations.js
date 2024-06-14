import { createAsyncThunk } from "@reduxjs/toolkit";
import "react-toastify/dist/ReactToastify.css";
import { getNew, getTopSales, getCategory } from "../../services/robcoApi";

export const getNewThunk = createAsyncThunk('cards/getNew', async()=>{
    return await getNew()
})

export const getTopSalesThunk = createAsyncThunk('cards/getTopSales', async()=>{
    return await getTopSales()
})

export const getCategoryThunk = createAsyncThunk('cards/getAll', async({page, category, pricemin, pricemax, color})=>{
    return await getCategory(page, category, pricemin, pricemax, color)
})
