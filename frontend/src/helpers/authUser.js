// For storing the logged in user's credentails across page refreshes
import decodeJWT from 'jwt-decode'
const key = 'persist:@storejs'


export function getValidToken() {
  const store = JSON.parse(localStorage.getItem(key))
  const auth = store ? JSON.parse(store.auth) : null
  const token = auth ? auth.token : null

  if (!token) return null

  try {
    const decodedToken = decodeJWT(token)
    // valid token
    const now = Date.now() / 1000

    // check if token has expired
    if (now > decodedToken.exp) {
      return null
    }
    return token
  }
  catch (error) {
    // invalid token
    return null
  }
}

export function getDecodedToken() {
  const validToken = getValidToken()
  if (validToken) {
    return decodeJWT(validToken)
  }
  else {
    return null
  }
}

export function checkAccess(roles = undefined) {
  const decodedToken = getDecodedToken()

  if ( decodedToken && roles && roles.indexOf(decodedToken.role) >= 0 )
    return true
  else if (decodedToken && !roles) //quando nao informado a regra valida apenas se estar autenticado
    return true
  else
    return false
}