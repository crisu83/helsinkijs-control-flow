// @flow

const fakeUserData = {
  name: 'demo',
}

const delay = ms =>
  new Promise(resolve => setTimeout(resolve, ms))

const createResponse = (data, status = 200) => ({
  status,
  json: () => Promise.resolve(data),
})

export const login = (username: string, password: string) =>
  delay(500).then(() => {
    if (username === 'demo' && password === 'demo') {
      return createResponse()
    } else {
      return createResponse('Incorrect username or password!', 401)
    }
  })

export const me = () =>
  delay(500).then(() => createResponse(fakeUserData))
