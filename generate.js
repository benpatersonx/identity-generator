const generate = async() => {
    const fetch = require("node-fetch")

    const response = {
        gender: "",
        title: "",
        first_name: "",
        last_name: "",
        age: "",
        email: "",
        door_number: 0,
        street: "",
        city: "",
        country: ""
    }

    const identityApi = await fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .catch(e => console.error(e))

    response.gender = identityApi.results[0].gender
    response.title = identityApi.results[0].name.title
    response.first_name = identityApi.results[0].name.first
    response.last_name = identityApi.results[0].name.last
    response.age = identityApi.results[0].dob.age
    response.email = identityApi.results[0].email
    response.door_number = identityApi.results[0].location.street.number
    response.street = identityApi.results[0].location.street.name
    response.city = identityApi.results[0].location.city
    response.country = identityApi.results[0].location.country
    
    return response
}

module.exports = generate;