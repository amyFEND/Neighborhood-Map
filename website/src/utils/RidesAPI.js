const api = 'http://localhost:3001'

export const getDisneyRides = () =>
  fetch(`${api}/index`, { headers })
    .then(res => res.json())
    .then(data => data.contacts)
