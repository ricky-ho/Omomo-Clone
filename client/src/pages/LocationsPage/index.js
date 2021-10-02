import { locations } from "../../config";
import "./style.scss";

const LocationsPage = () => {
  return (
    <main id="locations">
      <h1>LOCATIONS</h1>
      {locations.map((location, index) => (
        <section key={index}>
          <img
            src={location.imgSrc}
            alt={`OMOMO ${location.title}`}
            srcSet={location.imgSrcSet}
            sizes="100vw"
            loading="lazy"
          />
          <div className="location__wrapper">
            <h2>{location.title}</h2>
            <div className="location__content">
              <LocationContact
                address={location.address}
                phone={location.phone}
              />
              <LocationHours hours={location.hours} />
              <LocationMap
                address={location.address}
                embedSrc={location.embedSrc}
              />
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

const LocationContact = ({ address, phone }) => {
  return (
    <div>
      <h3>Address</h3>
      <p>{address}</p>
      <h3>Phone</h3>
      <p>{phone}</p>
    </div>
  );
};

const LocationHours = ({ hours }) => {
  return (
    <div>
      <h3>Hours</h3>
      <table>
        <tbody>
          {hours.map((time, index) => (
            <tr key={index}>
              <th>{time.day.toUpperCase()}</th>
              <td>{time.timeString}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const LocationMap = ({ address, embedSrc }) => {
  return (
    <div>
      <h3>Map</h3>
      <div className="location__map">
        <iframe title={address} src={embedSrc}></iframe>
      </div>
    </div>
  );
};

export default LocationsPage;
