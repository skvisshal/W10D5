import React from "react";

class Header extends React.Component {
    
    render() {
        const selected = this.props.selectedTab;
        const tabs = this.props.tabs.map((tab, idx) => {
        const title = tab.title;
        const add = idx === selected ?  'tab-element selected' : 'tab-element';
            return (
                <li className={add} key={idx} onClick={() => this.props.selectMethod(idx)}>{title}</li>
            ); 
        });
    return (
        <ul className='tab-list'>{tabs}</ul>
    )
        
    }
}

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedTab: 0
        };
        this.setSelectedTab = this.setSelectedTab.bind(this);
    }

    setSelectedTab(idx) {
        this.setState(
            { selectedTab: idx }
        );
    }

    render() {
        const tab = this.props.tabsObject[this.state.selectedTab];

        return (
            <div>
                <h1>Tabs</h1>
                <div className='tabs-folder'>
                    <Header 
                    selectMethod = { this.setSelectedTab } 
                    tabs = {this.props.tabsObject }
                    selectedTab = { this.state.selectedTab }
                    />
                    <article className='tab-content'>{ tab.content }</article>
                </div>
            </div>
        );
    }
}