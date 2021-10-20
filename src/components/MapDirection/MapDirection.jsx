import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import { Container } from 'react-bootstrap';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXphZHJlYWN0IiwiYSI6ImNrdXpvZGh5NDdmNTAyd21hend1cDllMHYifQ.bp1VYNezQZds_7noRik8qA';

const MapDirection = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [89.1185934, 22.7062881],
            zoom: 13
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    }, [])
    return (
        <Container>

            <div className="overflow-hidden my-5 map">
                <div id="map"></div>
            </div>
        </Container>
    );
};

export default MapDirection;