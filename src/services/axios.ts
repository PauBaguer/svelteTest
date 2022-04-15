import axios from 'axios';
import { Capacitor } from '@capacitor/core';

const http = axios.create({
	baseURL:
		Capacitor.getPlatform() === 'web'
			? 'http://localhost:3000/auth'
			: 'http://192.168.100.153:3000/auth'
});

const login = (userName: String, password: string) => {
	return http.post('/singin', { userName, password });
};

const Auth = {
	login
};

export default Auth;
