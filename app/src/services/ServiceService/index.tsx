import api from '../api';


export default {

    async listServices() {
        try {
            const response = await api.get('/service');
            return response;
            
        }
        catch(err) {
            console.log(err);
        }
    },

    async getService(id: number) {
        try {
            const response = await api.get(`/service/${id}`);
            return response;
        }
        catch(err) {
            console.log(err);
        }
    },

  
}

