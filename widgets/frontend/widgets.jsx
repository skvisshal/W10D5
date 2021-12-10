import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Clock from './clock';

const tabsObject = [
    {
        title: 'cats',
        content: 'kitties'
    },
    {
        title: 'dogs',
        content: 'puppies'
    },
    {
        title: 'birds',
        content: 'chicks'
    }
]

function Root() {
    return (
    <div>
        <Clock />
        <Tabs tabsObject = {tabsObject} />
    </div>
    );
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root/>, document.getElementById('main'));
});

