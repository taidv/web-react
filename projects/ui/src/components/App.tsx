import * as React from 'react';
import { Hello } from './hello';
import { default as User } from '../containers/user';

export const App: React.StatelessComponent<{}> = () => {
    return (
        <div className="top-wrapper">
            <Hello compiler="TypeScript" framework="React" />
            <User />
        </div>
    );
};
