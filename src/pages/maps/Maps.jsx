import { useEffect } from "react";
import { MapContainer, ImageOverlay, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { mapPointsData } from "../../data/map-points-data.js";
import "leaflet/dist/leaflet.css";
import "./Maps.css";

function FitBounds({ bounds }) {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(bounds);
  }, [map, bounds]);

  return null;
}

export default function Maps() {
  const imageWidth = 2000;
  const imageHeight = 2000;

  const bounds = [
    [0, 0],
    [imageHeight, imageWidth]
  ];

  return (
    <div className="container">
      <section className="maps-head panel">
        <h1 className="maps-title">Mapa de The Island</h1>
      </section>

      <section className="maps-wrap panel">
        <MapContainer
          crs={L.CRS.Simple}
          bounds={bounds}
          maxBounds={bounds}
          maxBoundsViscosity={1.0}
          minZoom={-2}
          className="leaflet-map"
        >
          <FitBounds bounds={bounds} />

          <ImageOverlay
            url="/images/maps/the-island-map.webp"
            bounds={bounds}
          />

          {mapPointsData.map((point) => (
            <Marker
              key={point.id}
              position={[point.y, point.x]}
            >
              <Popup>
                <strong>{point.name}</strong>
                <br />
                {point.type}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>
    </div>
  );
}