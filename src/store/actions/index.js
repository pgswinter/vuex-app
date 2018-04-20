import axios from 'axios'
import {API_BASE} from '../config'

import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS
} from '../mutation-types'

const productActions = {
	allProducts ({commit}) {
	    commit(ALL_PRODUCTS)
	    axios.get(`${API_BASE}/products`).then(response => {
	      commit(ALL_PRODUCTS_SUCCESS, response.data)
	    })
	},
	productById ({commit}, payload) {
	    commit(PRODUCT_BY_ID)
	    axios.get(`${API_BASE}/products/${payload}`).then(response => {
	      console.log(payload, response.data)
	      commit(PRODUCT_BY_ID_SUCCESS, response.data)
	    })
  	},
	increment({commit}){
		commit('increment')
	}
}

export default productActions