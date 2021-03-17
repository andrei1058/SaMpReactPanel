import React from 'react';

import DesktopSidebar  from "../../components/Sidenav/DesktopSidebar";
import MobileSidebar from '../../components/Sidenav/MobileSidebar';

function Sidenav() {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );

}

export default Sidenav;