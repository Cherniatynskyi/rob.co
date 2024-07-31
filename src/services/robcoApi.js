import axios from 'axios'

export const getNew = async () => {
    const response = await axios({ url: `https://rob-co-server.onrender.com/api/items/new`, method: "GET" })
    return response.data
}

export const getTopSales = async () => {
    const response = await axios({ url: `https://rob-co-server.onrender.com/api/items/topsales`, method: "GET" })
    return response.data
}

export const getCategory = async (page, category, pricemin, pricemax, color) => {
    const response = await axios({ url: `https://rob-co-server.onrender.com/api/items/category?page=${page}&category=${category}&pricemin=${pricemin}&pricemax=${pricemax}&color=${color}`, method: "GET" })
    return response.data
}

export const getTotal = async () => {
    const response = await axios({ url: `https://rob-co-server.onrender.com/api/items/total`, method: "GET" })
    return response.data
}



