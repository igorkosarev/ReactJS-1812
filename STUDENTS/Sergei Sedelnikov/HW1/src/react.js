import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

const el = React.createElement(
    'h1',
    {className: 'rnd'},
    'Хай гайсы)'
)

ReactDom.render(
    el,
    document.getElementById('app')
)