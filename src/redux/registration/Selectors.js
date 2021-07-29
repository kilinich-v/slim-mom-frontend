// export const notValidatedName = state => name =>
//   state.contacts.items.some(item => item.name === name)

export const getIsLoggedOn = state => state.user.isLoggedOn
export const getUserName = state => state.user.name
export const getToken = state => state.user.token
