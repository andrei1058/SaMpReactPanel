import React from 'react';

import DesktopSidebar  from "./DesktopSidebar";
import MobileSidebar from './MobileSidebar';

function Sidenav() {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );

}

export default Sidenav;