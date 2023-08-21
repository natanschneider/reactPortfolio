import axios from 'axios';

const token = import.meta.env.API_TOKEN
const url = import.meta.env.API_URL

export async function getFeed(){
        axios({
            method: 'post',
            url: url+'/feed',
            data: {
                token: token
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            return error
        })
}

export async function getTimeline(){
    axios({
        method: 'post',
        url: url+'/timeline',
        data: {
            token: token
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        return response.data
    })
    .catch(error => {
        return error
    })
}