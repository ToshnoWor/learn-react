import * as axios from "axios";

//const baseUrl = 'http://localhost:3033/api/';

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
    getProfile(userId) {
        return instanceNotLogin.get("profile/" + userId).then(r => {
            return  {
                data: r.data,
                status: r.status
            }});
    },
    auth() {
        return  instanceNotLogin.post("user/login", {
            "email": "alekseikoval69@gmail.com",
            "password": "22446688al"
        });
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
    }
}







