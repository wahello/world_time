import React, { PropTypes, Component } from 'react';
import { observer } from 'mobx-react';
import { City } from 'models';
import Col from 'react-bootstrap/lib/Col';

import Clock from 'views/main/clock';
import TimeLineList from 'views/main/time_line_list';

@observer
export default class CityView extends Component {

  state = {
    show: true
  }

  static propTypes = {
    dashboard: PropTypes.object.isRequired,
    city: PropTypes.object.isRequired
  }

  handleDestroy = () => {
    this.props.dashboard.actionRemoveCity(this.props.city)
  }

  handleHome = () => {
    this.props.city.setHome()
  }

  buttonCityHome = () => {
    let city = this.props.city

    if (city.home) {
      return (
        <Col xs={2}>
          <div> Home </div>
        </Col>
      )
    } else {
      return (
        <Col xs={2}>
          <button onClick={ this.handleHome } className="btn btn-primary page-scroll"> Home </button>
        </Col>
      )
    }
  }

  renderView() {
    let city = this.props.city
    City.loadAll()

    let now = new Date()

    return(
      <div className="city_view" >
        {this.buttonCityHome()}
        <Col xs={1}> {city.name} </Col>
        <Col xs={2}> <Clock day={true} hour={city.hour}/> </Col>
        <Col xs={1}> UTC {city.hour}</Col>
        <Col xs={5}><TimeLineList hour={city.hour} /></Col>

        <Col xs={1}>
          <button onClick={this.handleDestroy} className="btn btn-default">Destroy</button>
        </Col>

        <div className="clearfix" />
      </div>
    )
  }

  render() {
    return this.renderView()
  }
}


