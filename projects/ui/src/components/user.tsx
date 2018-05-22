import * as React from 'react';
import { Action } from '../actions';

export interface UserProps {
    id: number;
    name: string;
    isLoading: boolean;
    error?: string;
    // refresh: () => void;
    refresh: () => Action;
}

export const User: React.StatelessComponent<UserProps> = props => {
    const { id, name, isLoading, error, refresh } = props;
    return (
        <div>
            {isLoading && <p>Loading...</p>}

            {!isLoading && error && <h1>{error}</h1>}

            {!isLoading &&
                !error && (
                    <h1>
                        Hello {name || 'world'}! <input type="hidden" name="user" value={id} />{' '}
                    </h1>
                )}
            <button onClick={refresh}>Refresh</button>
        </div>
    );
};
