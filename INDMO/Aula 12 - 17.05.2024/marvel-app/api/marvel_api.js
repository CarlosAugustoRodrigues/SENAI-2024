import axios from 'axios';
import md5 from 'md5';

const private_key = '624a14545ead277526d768563f1ed6f22faf6fef';
const public_key = 'b37550bb17463874d5e48a02da7c5a11';
const date = new Date().getTime();
const hash = md5(date + private_key + public_key);

const api = axios.create({
    baseURL: 'https://geteway.marvel.com/v1/public',
    params: {
        date,
        apikey: public_key,
        hash
    }
});

export const getCharacter = async (offset = 0, limit = 100) => {
    try {
        const { data } = await api.get('/characters', {
            params: {
                offset,
                limit
            }
        });
        return data.data.results;
    } catch(error) {
        console.error(error);
        return;
    }
}