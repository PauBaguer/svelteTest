import axios from 'axios';

const http = axios.create({
	baseURL: 'http://localhost:3000/auth'
});

const login = (userName: String, password: string) => {
	return http.post('/singin', { userName, password });
};

const Auth = {
	login
};

export default Auth;
