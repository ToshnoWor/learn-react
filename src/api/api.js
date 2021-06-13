import * as axios from "axios";

//const baseURL = 'https://obscure-falls-49312.herokuapp.com/api/';
const baseURL = 'http://localhost:3033/api/';

const instanceLogin = axios.create({
    withCredentials: true,
    baseURL: baseURL
});
const instanceNotLogin = axios.create({
    baseURL: baseURL
});

export const userAPI = {
    getUsers(currentPage = 1 , pageSize = 2) {
        return instanceLogin.get("profile/get?" +
            "_page=" + currentPage +
            "&_limit=" + pageSize).then(r => r.data);
    },
    follow (auth, id) {
        return instanceLogin.post("profile/follow/"+ id, {},
            {
                headers: {
                    'auth-token': auth ? auth.token : ''
                }
            }
        );
    },
    unfollow(auth, id) {
        return instanceLogin.delete("profile/unfollow/"+id,
            {
                headers: {
                    'auth-token': auth ? auth.token : ''
                }
            }
        )
    },
}

export const profileAPI = {
    changeStatus(data){
        return instanceLogin.put(
            "profile/status",
            data.content,
            data.config
        ).then(r => {
            return r.status;
        });
    },
    getProfile(userId) {
        return instanceNotLogin.get("profile/" + userId).then(r => {
            return  {
                data: r.data,
                status: r.status
            }});
    },
    addPost(data){
        return instanceLogin.post("profile/post",data.content,data.config)
            .then(r => {
                return r.data.resultCode;
            })
    },
    removePost(data){
        return instanceLogin.delete("profile/post/" + data.id, data.config)
            .then(r => {
                return r.data.resultCode;
            })
    },
    changeAge(data){
        return instanceLogin.put(
            "profile/age",
            data.content,
            data.config
        ).then(r => {
            return r.data.resultCode;
        })
    },
    changeValue(data){
        return instanceLogin.put(
            "profile/"+data.value,
            data.content,
            data.config
        ).then(r => {
            return r.data.resultCode;
        })
    },
}

export const authAPI = {
    auth(data) {
        return  instanceNotLogin.post("user/login", data);
    },
    singUp(data) {
        return  instanceNotLogin.post("user/register", data);
    },
}

export const messageAPI = {
    getMessage(data) {
        return instanceLogin.get("profile/message/get", data.config).then(
            r => {
                return r.data;
            }
        );
    }
}