import React from "react";
import MapContainer from '../components/GoogleMap' 
import Videos from '../components/Videos'
import Weather from '../components/Weather'

function Home({ handleLogOut }) {
  return (
    <section className="home">
      <div className="login-divider">
        <button className="logout-button" onClick={handleLogOut}>
          Logout
        </button>

          <MapContainer/>
          <Videos/>
          <Weather/>
      </div>
    </section>
  );
}

export default Home;
