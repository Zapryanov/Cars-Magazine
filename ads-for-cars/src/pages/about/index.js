import React from "react";
import PageLayout from "../../components/page-layout";
import Title from "../../components/title";
import styles from "./index.module.css";
import showRoomImg from "../../public/showroom-2.jpg"
import { Link } from "react-router-dom";

const AboutPage = () => {
    
    return (
        <PageLayout>
            <Title title="About Us" />
            <div className={styles.container}>
                <p className={styles.text}>
                    We are a big showroom for cars and SUVs for 15 years on the Bulgarian car market. We offer a wide variety of both luxury and middle class vehicles. We have recently provided our online advertising platform to you as well. Here you can advertise your car for sale or find one from the ads.
                </p>
                <p>
                    <img src={showRoomImg} alt="showroom" className={styles.imgShowRoom}/>
                </p>
                <p className={styles.text}>
                    If you are a young, positive, creative person with at least a little experience in selling cars, we can offer you a job. If you are interested, contact us on the <Link to="/contact" className={styles.link}>contact page</Link>.
                </p>
            </div>
        </PageLayout>
    )
}

export default AboutPage;

