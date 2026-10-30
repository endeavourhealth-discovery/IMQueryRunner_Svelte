import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	DATABASE_URL: { description: 'The database connection string.' },
	CASDOOR_URL: { public: true },
	CASDOOR_CLIENT_ID: { public: true },
	IMAPI_URL: {}
});
