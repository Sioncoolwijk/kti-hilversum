import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for marker icon paths
import markerIconPng from "/red-marker.png";

const Map = () => {
  // Your address coordinates (latitude and longitude)1
  const position = [52.207897, 5.1822];

  // Fix for marker icon in Leaflet
  const defaultIcon = L.icon({
    iconUrl: markerIconPng,
    iconAnchor: [20, 40], // Set anchor to the bottom of the marker (half of the icon width and full height)
    popupAnchor: [0, -40], // Popup should appear above the marker
  });
  L.Marker.prototype.options.icon = defaultIcon;

  // This hook is used to control the map (centering)
  const MapCenterButton = () => {
    const map = useMap();
    const centerMap = () => {
      map.setView(position, 13); // Reset to the original position and zoom level
    };

    return (
      <button
        onClick={centerMap}
        style={{
          position: "absolute",
          bottom: "10px", // Position the button at the bottom
          left: "10px", // Position the button at the right
          zIndex: 1000, // Make sure it's on top
          padding: "10px 20px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Centreren
      </button>
    );
  };

  return (
    <div>
      <section className="">
        <div className="w-full h-96">
          <MapContainer
            center={position}
            zoom={13}
            className="h-full w-full rounded-lg shadow-lg"
            scrollWheelZoom={false} // Disable scroll zoom
          >
            {/* Tile Layer */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Marker */}
            <Marker position={position}>
              <Popup>
                <b>KTI Hilversum:</b> <br /> Utrechtseweg 79 A 1213 TM Hilversum
              </Popup>
            </Marker>

            {/* Center Map Button */}
            <MapCenterButton />
          </MapContainer>
        </div>
      </section>
    </div>
  );
};

export default Map;
