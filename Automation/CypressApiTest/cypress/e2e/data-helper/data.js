class Data {
    
    headerPayload(){
        const headerBody={
            "accept":"application/json"
        }
        return headerBody;
    }

    bodyPayload(){
        const postData={
            "id": 121354423472291,
            "username": "ali",
            "firstName": "Ali Cann",
            "lastName": "Özzsoy",
            "email": "sen@gmail.com",
            "password": "1237745",
            "phone": "12314545554534",
            "userStatus": 0
        }
        return postData;
    }

    updatePayload(){
        const postData={
            "id": 2,
            "username": "alican",
            "firstName": "Ali Can",
            "lastName": "Özsoy",
            "email": "alicanozsoy12@gmail.com",
            "password": "1",
            "phone": "456",
            "userStatus": 1
        }
        return postData;
    }

    addDogPayload(){
        const postData = {
            "id": 0,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "Böri",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
        }
        return postData; 
    }

    updateDogPayload(){
        const postData = {
            "id": 0,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "Vindor",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
        }
        return postData;
    }

    updateNewDogPayload(){
        const postData = {
            "id": 0,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "Morgan",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
        }
        return postData;
    }

    orderPayload(){
        const postData = {
            "id": 1,
            "petId": 2,
            "quantity": 1,
            "shipDate": "2024-08-09T13:12:31.135+0000",
            "status": "placed",
            "complete": true
        }
        return postData; 
    }
}

export default Data;