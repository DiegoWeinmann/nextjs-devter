import AppLayout from 'components/AppLayout';
import DevterIcon from 'components/Icons/DevterIcon';

export default function Home() {
	return (
		<>
			<AppLayout>
				<div>
					<DevterIcon />
					<h1>devter</h1>
					<h2>Talk about development with developers </h2>
				</div>
			</AppLayout>
		</>
	);
}
