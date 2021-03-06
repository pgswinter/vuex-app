import Vue from 'vue';
import Vuex from 'vuex';
import {productGetters,manufacturerGetters} from './getters'
import {productMutations,cartMutations,manufacturerMutations} from './mutations'
import {productActions,manufacturerActions} from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: true,
	state:{
		// bought items
		cart: [],
		// ajax loader
		showLoader: false,
		// selected product
		product: {},
		products: [],
		manufacturers: []
		// all products
		// products :[
		// 	{
		// 	    id: 1,
		// 	    manId: 3,
		// 	    name: 'Samsung S7 Edge',
		// 	    price: 659,
		// 	    image: 'http://www.brandsmartusa.com/images/product/large/20208018.jpg',
		// 	    description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
		// 	    manufacturer: {
		// 	      id: 3,
		// 	      name: 'Samsung'
		// 	    }
		// 	},
		// 	{
		// 	    id: 2,
		// 	    manId: 1,
		// 	    name: 'iPhone 7',
		// 	    price: 769,
		// 	    image: 'http://www.brandsmartusa.com/images/product/large/20217366.jpg',
		// 	    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.',
		// 	    manufacturer: {
		// 	      id: 1,
		// 	      name: 'Apple'
		// 	    }
		// 	},
		// 	{
		// 	    id: 3,
		// 	    name: 'Xperia XZ',
		// 	    price: 649,
		// 	    image: 'http://www.brandsmartusa.com/images/product/large/20222515.jpg',
		// 	    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.',
		// 	    manufacturer: {
		// 	      id: 2,
		// 	      name: 'Sony'
		// 	    }
		// 	}
		// ],
		// manufacturers: [
		//  	{
		// 	    id: 1,
		// 	    name: 'Apple'
		//   	},
		//   	{
		// 	    id: 2,
		// 	    name: 'Sony'
		//   	},
		//   	{
		// 	    id: 3,
		// 	    name: 'Samsung'
		//   	}
		// ]
	},
	// GETTERS
	getters: Object.assign({},productGetters, manufacturerGetters),
	// MUTATIONS
	mutations: Object.assign({},productMutations, cartMutations, manufacturerMutations),
	// ACTIONS
	actions: Object.assign({},productActions, manufacturerActions)
	// mutations:{
	// 	increment(state){
	// 		state.showLoader = !state.showLoader
	// 		console.log(state.showLoader)
	// 	}
	// },
	// actions: {
	// 	increment({commit}){
	// 		commit('increment')
	// 	}
	// }

})

export default store