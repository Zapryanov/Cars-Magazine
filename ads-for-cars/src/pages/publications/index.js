import React, { Component } from "react";
import PageLayout from "../../components/page-layout";
import styles from "./index.module.css";
import Car from "../../components/car";
import Title from "../../components/title";
import UserContext from "../../Context";

class Publications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: []
    }
  }

  static contextType = UserContext;

  getCars = async () => {
    const promise = await fetch("http://localhost:9999/api/cars");
    const cars = await promise.json();

    this.setState({
      cars
    })
  }

  renderCars = () => {
    const { cars } = this.state;

    if (cars.length === 0) {
      return (
        <div className={styles.wrapEmpty}>
          <div className={styles.wrapText}>
            <p>
              <span className={styles.brown}>No more ads. All cars are sold.</span>
            </p>
            <p>
              If you want to sell your car, please upload your ad!
            </p>
            <p>
              If you are not a registered user, you must first register!
            </p>
          </div>
        </div>
      )
    }

    return cars.map((car) => {
      return (
        <Car key={car._id} {...car} />
      )
    })
  }

  componentDidMount() {
    this.getCars();
  }

  render() {
    return (
      <PageLayout>
        <Title title="Cars" />
        <div className={styles.carsWrapper}>
          {this.renderCars()}
        </div>
      </PageLayout>
    )
  }
}

export default Publications