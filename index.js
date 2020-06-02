
const restPhoneApi = axios.create({
    //baseURL: 'https://glacial-reef-88309.herokuapp.com/api/persons'
    baseURL: 'http://localhost:9000'
})
const getAllPhone = () => {
    restPhoneApi
        .get('/api/persons')
        .then(responseFromApi => {
            console.log(responseFromApi.data);
            document.write(JSON.stringify(responseFromApi.data))
        })
        .catch(err => console.log('error', err));
}

const hacerPost = () => {
    const credentials = {
        user: document.getElementById('user').value,
        password: document.getElementById('password').value
    }

    restPhoneApi
        .post('/login', credentials)
        .then(console.log('login successful'))
        .catch(err => console.log('error', err));
}

const hacerLogout = () => {
    restPhoneApi
        .get('/logot')
        .then(responseFromApi => {
            console.log(responseFromApi.data);
        })
        .catch(err => console.log('error', err));
}

document.getElementById('theButton').onclick = getAllPhone;

document.getElementById('login').onclick = hacerPost;
document.getElementById('login').onclick = hacerLogout;

