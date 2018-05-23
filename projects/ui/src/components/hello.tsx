import * as React from 'react';
import { FormattedMessage } from 'react-intl';

export interface HelloProps {
    compiler: string;
    framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    public render() {
        return (
            <h1>
                Hello from {this.props.compiler} and {this.props.framework}!
                <br />
                <FormattedMessage
                    id="app.greeting"
                    defaultMessage={'Hello in default {name}!'}
                    values={{ name: 'Kua' }}
                />
            </h1>
        );
    }
}
