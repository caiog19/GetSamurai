import api from '../api';
import Register from '../../screens/Register';
import Login from '../../screens/Login';

export interface FormRegister {
    isClient: number;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    isAdmin: number;
}

export interface FormLogin {
    email: string;
    password: string;
}

export default {
    

    async createUser(data: FormRegister) {
        try {
            const response = await api.post('/user', data);
            return response;
            
        }
        catch(err) {
            console.log(err);
        }
    },

    async loginUser(data: FormLogin) {
        try {
            const response = await api.post('/login', data);
            return response;
        }
        catch(err) {
            console.log(err);
        }
    }
}

