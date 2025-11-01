import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import { init } from './init'
import { retrieveLaunchParams, postEvent } from '@telegram-apps/sdk-react';
import { Reports } from './pages/Reports/index.jsx';
import { Exercises } from './pages/Exercises/index.jsx';
import { Progress } from './pages/Progress/index.jsx';
import { Footer } from './components/Footer.jsx';


export function App() {
	return (
		//<TelegramSDKInitProvider>
			<LocationProvider>
				<main>
					<Router>
						<Route path="/" component={Home} />
						<Route path="/reports" component={Reports}/>
						<Route path="/exercises" component={Exercises} />
						<Route path="/progress" component={Progress} />
						<Route default component={NotFound}/>
					</Router>
				</main>
				<Footer/>
			</LocationProvider>
		// </TelegramSDKInitProvider>

	);
}

export function Error(props: { errorText: string }) {
	const { errorText } = props;
	return (<p>{errorText}</p>);
}

try {
  const launchParams = retrieveLaunchParams();
  const { tgWebAppPlatform: platform } = launchParams;
  const debug = (launchParams.tgWebAppStartParam || '').includes('platformer_debug')
  	|| import.meta.env.DEV;

  // Configure all application dependencies.
  await init({
    debug: true,
	// WARNING: ALWAYS TRUE ON PURPOSE
    eruda: debug && ['ios', 'android'].includes(platform) || true,
    mockForMacOS: platform === 'macos',
  })
    .then(() => {
		render(<App />, document.getElementById('app'));
		postEvent('web_app_expand');
    });
} catch (e) {
  const str = JSON.stringify(e);
  render(<Error errorText={str}/>, document.getElementById('app'))
  //root.render(<EnvUnsupported/>);
}

