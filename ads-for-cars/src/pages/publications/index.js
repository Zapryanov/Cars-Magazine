import React, { Component } from "react";
import PageLayout from "../../components/page-layout";
import styles from "./index.module.css";
import Car from "../../components/car";
import Title from "../../components/title";
import UserContext from "../../Context";
import Aside from "../../components/aside";

class Publications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTrue: true,
      cars: []
    }
  }

  static contextType = UserContext;

  getCars = async () => {
    const promise = await fetch("http://localhost:9999/api/cars");
    const cars = await promise.json();

    if (cars.length === 0) {
      this.setState({
        isTrue: false
      })
    }

    this.setState({
      cars
    })
  }

  sortDescending = () => {
    const { cars } = this.state;

    this.setState({
      cars: cars.sort((a, b) => b.price - a.price)
    })
  }

  sortAscending = () => {
    const { cars } = this.state;

    this.setState({
      cars: cars.sort((a, b) => a.price - b.price)
    })
  }

  sortAlphabetically = () => {
    const { cars } = this.state;

    this.setState({
      cars: cars.sort((a, b) => a.modelName > b.modelName ? 1 : -1)
    })
  }


  renderCars = () => {
    const { cars } = this.state;

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
    const { isTrue } = this.state;

    if (!isTrue) {
      return (
        <PageLayout>
          <Title title="Cars" />
          <div className={styles.wrapEmpty}>
            <div className={styles.wrapText}>
              <p>
                <span className={styles.red}>No more ads. All cars are sold.</span>
              </p>
              <p>
                If you want to sell your car, please <span className={styles.red}>Create</span> your ad!
            </p>
              <p>
                If you are not a registered user, you must first register!
            </p>
              <p>
                Or just login if you are already registered user.
            </p>
            </div>
          </div>
        </PageLayout>
      )
    }

    return (
      <PageLayout>
        <Title title="Cars" />
        <div className={styles.carsWrapper}>
          <Aside
            sortAlphabetically={this.sortAlphabetically}
            sortAscending={this.sortAscending}
            sortDescending={this.sortDescending}
          />
          <div className={styles.cars}>
            {this.renderCars()}
          </div>
        </div>
      </PageLayout>
    )
  }
}

export default Publications