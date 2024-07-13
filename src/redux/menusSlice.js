import {createSlice} from "@reduxjs/toolkit";


export const menusSlice = createSlice({
    name: 'items',
    initialState: {
        isMenuOpen: false,
        isFilterOpen: false
    },
    reducers:{
        openMenu: (state)=>{
            state.isMenuOpen = true
            console.log('OPEN')
        },
        closeMenu: (state)=>{
            state.isMenuOpen = false
        },
        openFilter: (state)=>{
            state.isFilterOpen = true
        },
        closeFilter: (state)=>{
            state.isFilterOpen = false
        }
    }
})

export const {openMenu, closeMenu, openFilter, closeFilter} = menusSlice.actions