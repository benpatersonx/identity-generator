# Identity Generator
Generate a random identity, detailing an extensive amount of information (gender, title, first name, last name, age, email, address, city, country), with this easy-to-use package.

## Example
```js
const fakeIdentityGenerator = require("fake-identity-generator")
fakeIdentityGenerator.generate()
    .then(r => console.log(r))
    .catch(e => console.error(e))
```

## Response
```js
{
  gender: "male",
  title: "Mr",
  first_name: "John",
  last_name: "Doe",
  age: 39,
  email: "john.doe@example.com",
  door_number: 64,
  street: "Zoo Lane",
  city: "London",
  country: "England"
}
```
