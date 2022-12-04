// api url (or root endpoint)
const URL = 'https://randomuser.me/api/';

const getUser = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    // destructure
    const person = data.results[0];
    const { phone, email } = person;
    const { large: pic } = person.picture;
    const { password } = person.login;
    const { first: firstName, last: lastName } = person.name;
    const age = person.dob.age;
    const {
      location: {
        street: { number, name },
      },
    } = person;
    return {
      pic,
      phone,
      email,
      age,
      password,
      street: `${number} ${name}`,
      name: `${firstName} ${lastName}`,
    };
  } catch (error) {
    console.log('there was an error');
  }
};

export default getUser;
