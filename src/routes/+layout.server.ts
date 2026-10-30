import AuthService from '#lib/services/AuthService.ts';
import SecurityService from '#lib/services/SecurityService.ts';

export async function load() {
	try {
		const user = await SecurityService.getUser();
		return { user: user };
	} catch (e: any) {
		await AuthService.logout();
		await AuthService.login();
	}
}
