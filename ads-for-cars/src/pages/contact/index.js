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
                <div className={styles.textContainer}>
                    <div>
                        <h2>CarMagazine.com</h2>
                    </div>
                    <div>
                        <span className={styles.spanText}>Plovdiv 4000, str. "Osvobojdenie" №49</span>
                        <span className={styles.spanText}>Telephone: 0898/135437</span> 
                        <span className={styles.spanText}>Work time: 9:00 - 18:00 / without Sunday /</span> 
                        <span className={styles.spanText}>e-mail: CarMagazine@gmail.com</span> 
                    </div>
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