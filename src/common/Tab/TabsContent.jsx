import React from 'react';

function TabsContent(props) {
    return (
        <ul className="tab-content">
            {props.children}
        </ul>
    );
}

export default TabsContent;