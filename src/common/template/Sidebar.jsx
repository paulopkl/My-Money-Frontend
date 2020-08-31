import React from 'react';
import Menu from './Menu';

function Sidebar() {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <Menu />
            </section>
        </aside>
    );
}

export default Sidebar;