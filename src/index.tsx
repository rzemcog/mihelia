import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import { init } from './init'
import { retrieveLaunchParams, postEvent } from '@telegram-apps/sdk-react';


export function App() {
	return (
		//<TelegramSDKInitProvider>
			<LocationProvider>
				<Header />
				<main>
					<Router>
						<Route path="/" component={Home} />
						<Route default component={NotFound} />
					</Router>
				</main>
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

