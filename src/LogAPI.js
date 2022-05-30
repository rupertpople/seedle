import React from 'react'

function LogAPI() {
  const script = document.createElement("script");
  script.src = "./model/GeocodingAPI.js";
  script.async = true;
}

export default LogAPI;