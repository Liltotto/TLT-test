import { Metadata } from 'next';
import AuthForm from './ui/authForm';

export const metadata: Metadata = {
	title: 'Авторизация',
};

export default function Auth() {

	//const session = await getSession();
	

	return (
		<AuthForm/>
	);
}
