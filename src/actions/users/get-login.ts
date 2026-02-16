
import { api } from '../api';
import { useUserStore } from '../../store/user-store';

export const login = async(email:string, password:string) =>{
    try {
        const response = await api.post('/users/login', { email, password });

        if(!response || !response.data) return null

        const payload = response.data;

        // Guardar en el store (zustand)
        const store = useUserStore;

        if(store && typeof store.getState === 'function'){
            const state = store.getState();
            if(typeof state.userLoged === 'function') state.userLoged(payload);
            if(typeof state.activeLogin === 'function') state.activeLogin();
        }

        return payload;
        
    } catch (error) {
        return {
            message: 'Error al iniciar sesión'
        }
    }
}