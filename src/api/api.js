import * as axios from "axios";

const instanceLogin = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3033/api/'
});
const instanceNotLogin = axios.create({
    baseURL: 'http://localhost:3033/api/'
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
                    'auth-token': auth ? auth.accessToken : ''
                }
            }
        );
    },
    unfollow(auth, id) {
        return instanceLogin.delete("profile/unfollow/"+id,
            {
                headers: {
                    'auth-token': auth ? auth.accessToken : ''
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
    }
}

export const authAPI = {
    auth(data) {
        return  instanceNotLogin.post("user/login", data);
    }
}