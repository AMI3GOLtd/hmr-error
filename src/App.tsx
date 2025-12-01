import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Paper } from '@mui/material';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(<Beef />);

function Beef() {
	return <Paper>Beef</Paper>;
}