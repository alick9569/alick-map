import axios from "axios";

class fetch{
    constructor(){
        this.instance = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            headers: {
                "Content-Type": "application/json",
            }
        })
        this.instance.interceptors.response.use(this.handleSuccess, this.handleError)

    }

    handleSuccess(response) {
        return response;
    }
    
    handleError = (error) => {
        switch (error.response?.status) {
            case 500:
                if (window.location.pathname !== '/500')
                {
                    window.location = "/500"
                }
                break
            default:
                break
        }
        return Promise.reject(error)
    }

    get(path, params) {
        return this.instance.get(path, { params: params })
    }

    post(path, data) {
        return this.instance.post(path, data)
    }
}

export default new fetch();