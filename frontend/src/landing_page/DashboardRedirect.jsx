import React, { useEffect } from "react";

const DashboardRedirect = () => {
  useEffect(() => {
    // replace so login isn't kept in history
    window.location.replace("http://localhost:3000");
  }, []);

  return null;
};

export default DashboardRedirect;
