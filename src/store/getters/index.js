export const productGetters = {
	// All products
	allProducts: (state) => {
		return state.products
	},
	productById: (state, getters) => id => {
	    if (getters.allProducts.length > 0) {
	      return getters.allProducts.filter(p => p.id === id)[0]
	    } else {
	      return state.product
	    }
  	},
  	allManufacturers: state => {
    	return state.manufacturers
 	}
}

export const manufacturerGetters = {
  allManufacturers: state => state.manufacturers
}
