import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header.jsx';
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
			<BrowserRouter>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/reports" element={<Reports />}/>
						<Route path="/exercises" element={<Exercises />} />
						<Route path="/progress" element={<Progress />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer/>
			</BrowserRouter>
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
		const root = createRoot(document.getElementById('app'));
		root.render(<App />);
		postEvent('web_app_expand');
    });
} catch (e) {
  const str = JSON.stringify(e);
  const root = createRoot(document.getElementById('app'));
  root.render(<Error errorText={str}/>);
  //root.render(<EnvUnsupported/>);
}

