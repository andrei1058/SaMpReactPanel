import React from 'react';

import SidebarContent from './SidebarContent';

export default function DesktopSidebar(props: any){
    return (
        <aside className="z-30 flex-shrink-0 hidden overflow-y-auto bg-white dark:bg-gray-800 lg:block shadow-md sticky">
            <SidebarContent />
        </aside>
    );
}