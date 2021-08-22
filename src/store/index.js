import { createStore } from 'vuex'

const setLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    cart: []
  },
  getters: {
    itemQuantity: state => product => {
      const item = state.cart.find(singleitem => singleitem.id === product.id)

      if (item) return item.quantity
      else return null
    },
    cartItems: state => state.cart,
    cartTotal: state => state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
  },
  mutations: {
    addToCart(state, product) {
      const item = state.cart.find(singleitem => singleitem.id === product.id)

      if (item) item.quantity++
      else state.cart.push({ ...product, quantity: 1 })

      setLocalStorage(state.cart)
    },
    removeFromCart(state, product) {
      const item = state.cart.find(singleitem => singleitem.id === product.id)

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter(singleitem => singleitem.id !== product.id)
        }
      }

      setLocalStorage(state.cart)
    },
    cartUpdateFromLocalStorage(state) {
      const cartItem = localStorage.getItem('cart');
      if (cartItem) {
        state.cart = JSON.parse(cartItem)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
