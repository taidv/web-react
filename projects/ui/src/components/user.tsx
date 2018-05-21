import * as React from "react";

export interface UserProps {
    id: number;
    name: string;
    isLoading: boolean;
    error?: string;
    refresh: () => void; 
}


export const User: React.StatelessComponent<UserProps> = (props) => {
    const {id, name, isLoading, error, refresh} = props;
    return (
        <div>
            { isLoading &&
                <p>Loading...</p>
            }
        
            { !isLoading &&
                error &&
                    <h1>{error}</h1>
            }
        
            { !isLoading &&
                !error &&
                    <h1>Hello {name || 'world'}! <input type="hidden" name="user" value={id} /> </h1>
            }
            <button onClick={props.refresh}>Refresh</button>
        </div>
    );
};
