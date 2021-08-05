import api from '../api';
import Register from '../../screens/Register';

export default {
    async createUser(data: any) {
        try {
            const response = await api.post('/user', data);
            return response;
            
        }
        catch(err) {
            console.log(err);
        }
    }
}

