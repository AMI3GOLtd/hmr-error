import * as React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(<Beef />);

function Beef() {
    return <>Beef</>;
}
