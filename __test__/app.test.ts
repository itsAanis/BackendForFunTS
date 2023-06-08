const axios = require('axios');



/*
describe('The router', () => {
    test('The get route - should return 404', async () => {
      const res = await axios.get('https://backendsss.azurewebsites.net')
      expect(res).toBeTruthy()
      expect(res.status).toBe(404)
    })
  }) // should return error etc  */


  describe('The router', () => {
    test('The get route shoulld return 200', async () => {
      const res = await axios.get('https://backendsss.azurewebsites.net/films')

      expect(res).toBeTruthy()
      expect(res.status).toBe(200)
    })
  })
  // should be fine 


  // another to test delete 
  describe('The router', () => {
    test('The delete route - should return status 204', async () => {
      const filmId = 21
     const res= await axios.delete(`https://backendsss.azurewebsites.net/films/${filmId}`)
      expect(res).toBeTruthy()
      expect(res.status).toBe(204)
    
    })
    })
