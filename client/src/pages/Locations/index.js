import storeLocations from "../../utils/storeLocations";
import "./style.css";

const Locations = ({ smallDisplay }) => {
  return (
    <main id="locations">
      <h1>LOCATIONS</h1>
      {storeLocations.map((location, index) => (
        <section key={index} className="location-section">
          <img
            src={location.imgSrc}
            alt={`OMOMO ${location.title}`}
            srcSet={location.imgSrcSet}
            sizes="100vw"
            loading="lazy"
          />
          <div className="location-container">
            <h2 className="location-title">{location.title}</h2>
            <div className="location-content">
              <div className="location-item first">
                <h3>Address</h3>
                <p>{location.address}</p>
                <h3>Phone</h3>
                <p>{location.phone}</p>
              </div>
              <div className="location-item">
                <h3>Hours</h3>
                <table>
                  <tbody>
                    {location.hours.map((time, index) => (
                      <tr key={index} className="t-row">
                        <th>{time.day.toUpperCase()}</th>
                        <td>{time.timeString}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="location-item last">
                <h3>Map</h3>
                <div className="map-responsive">
                  <iframe
                    title={location.address}
                    src={location.embedSrc}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Locations;
