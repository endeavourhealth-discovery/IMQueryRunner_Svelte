import z from 'zod';

import { IMAPI_URL } from '$app/env/public';

import { type User, UserSchema } from '#lib/models/User.ts';
import { parseApiResponse } from '#lib/helpers/parseApiResponse.ts';
import AuthService from './AuthService';

const API_URL = IMAPI_URL + 'api/security';

const SecurityService = {
	async getUser(): Promise<User> {
		const TOKEN = await AuthService.getAccessToken();
		const response = await fetch(API_URL + '/private/user', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + TOKEN }
		});
		const result = await response.json();
		return parseApiResponse(result, UserSchema);
	}
};

if (process.env.NODE_ENV !== 'test') Object.freeze(SecurityService);

export default SecurityService;
