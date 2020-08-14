import React from "react";
import PageLayout from "../../components/page-layout";
import Title from "../../components/title";
import styles from "./index.module.css";
import GoogleMapReact from 'google-map-react';

const ContactsPage = () => {

    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: { lat: 42.131155, lng: 24.793281 },
            map,
            title: `Car-Magazine`
        });
        return marker;
    };

    return (
        <PageLayout>
            <Title title="Contacts" />
            <div className={styles.container}>
                <div>
                    Some mobile phones, address and Google-Maps maybe...:)
                </div>
                <div className={styles.map}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCe0KoGzgsMjtwjyQi6wWopCX62qimjAIM' }}
                        defaultCenter={{ lat: 42.131155, lng: 24.793281 }}
                        defaultZoom={17}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                    >
                    </GoogleMapReact>
                </div>
            </div>
        </PageLayout>
    )
}

export default ContactsPage;