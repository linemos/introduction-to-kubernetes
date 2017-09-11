/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

let DevTools;// eslint-disable-line import/no-mutable-exports
if (true) { // window.location.href.includes('localhost')) {
    console.log('is localhost');
    DevTools = createDevTools(
        <DockMonitor
            toggleVisibilityKey="ctrl-y"
            changePositionKey="ctrl-q"
            fluid={false}
            defaultSize={300}
            defaultIsVisible={false}
        >
            <LogMonitor theme="nicinabox" />
        </DockMonitor>
    );

    console.log('Running in dev, ctrl+y to open DevTools'); // eslint-disable-line no-console
} else {
    DevTools = () => null;
}

export default DevTools;
