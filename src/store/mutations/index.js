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

const productMutations = {
  [ALL_PRODUCTS] (state){
    // Called when fetching products
    state.showLoader = true
  },
	[ADD_PRODUCT] (state,payload){
		state.showLoader = true
		state.products.push(payload)
	},
  [ALL_PRODUCTS_SUCCESS] (state,payload){
    // Called when product have been fetched
    state.showLoader = true
    // updates state products
    state.products = payload
  },
  increment(state){
    state.showLoader = !state.showLoader
    console.log(state.showLoader)
  }
}

export default productMutations