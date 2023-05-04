import axios from 'axios';

axios.defaults.baseURL= 'https://connections-api.herokuapp.com/';

export async function fetchContacts () {
    const {data}= await axios.get('/contacts');
    // token.set(data.token);
    return data;
   
}

export async function addContact({name, number}) {
    const {data}= await axios.post('/contacts', {name, number});
    // token.set(data.token);
    return data;
   
}

export async function deleteContact(contactId) {
    const {data} = axios.delete(`/contacts/${contactId}`)
    return data;
}