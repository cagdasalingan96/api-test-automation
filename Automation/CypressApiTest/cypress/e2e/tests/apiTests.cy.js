//const { describe } = require("mocha")
import Data from "../data-helper/data"
import Params from "../data-helper/params";
describe('User Tests', () => {

  const data = new Data;
  const params = new Params;
  var url = params.url();

  /**
   * 1
   */

  it(' Create User ', () => {
  
    cy.request({
      method: 'POST',
      url: url+'/v2/user',
      body: data.bodyPayload()
    })
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it(' Get User Info ', () => {
    cy.request('GET', url+'/v2/user/ali')
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it(' Update User ', () => {
    
    cy.request({
      method: 'PUT',
      url: url+'/v2/user/alibilmem',
      body: data.updatePayload()
    })
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it(' Delete User ', () => {
    
    cy.request({
      method: 'DELETE',
      url: url+'/v2/user/ali',
      Headers: data.headerPayload()
    })
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  /**
   * 2
   */

  it(' Add Dog ', () => {
    
    cy.request({
      method: 'POST',
      url: url+'/v2/pet',
      body: data.addDogPayload(),
    })
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it(' get dog id ', () => {
    cy.request('GET', url+'/v2/pet/9223372036854750694')
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it(' Update Dog ', () => {
    
    cy.request({
      method: 'PUT',
      url: url+'/v2/pet',
      body: data.updateDogPayload(),
    })
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it(' Update New Dog ', () => {
    
    cy.request({
      method: 'PUT',
      url: url+'/v2/pet',
      body: data.updateNewDogPayload(),
    })
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it(' Delete Dog ', () => {
    

    cy.request({
      method: 'DELETE',
      url: url+'/v2/pet/9223372036854750694',
      Headers: data.headerPayload()
    })
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  /**
   * 3
   */

  it(' Order Place ', () => {
    
    cy.request({
      method: 'POST',
      url: url+'/v2/store/order',
      body: data.orderPayload(),
    })
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it(' Get Order Id ', () => {
    cy.request('GET', url+'/v2/store/order/1')
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it(' Delete Order ', () => {
    

    cy.request({
      method: 'DELETE',
      url: url+'/v2/store/order/1',
      Headers: data.headerPayload()
    })
    .then((response) => {
      expect(response.status).to.eq(200)
    })
  })

})
