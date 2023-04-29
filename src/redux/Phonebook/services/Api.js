import axios from 'axios';

// axios.defaults.baseURL= 'https://644119defadc69b8e07afc61.mockapi.io';
axios.defaults.baseURL= 'http://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export async function fetchContacts () {
    const {data}= await axios.get('/contacts');
    token.set(data.token);
    return data;
   
}

export async function addContact({name, number}) {
    const {data}= await axios.post('/contacts', {name, number});
    token.set(data.token);
    return data;
   
}

export async function deleteContact(contactId) {
    const {data} = axios.delete(`/contacts/${contactId}`)
    return data;
}