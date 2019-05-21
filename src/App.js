import React from 'react';
import './App.css';
import { setData, setLoading, setTempUnit, setCity } from './actions/Actions.js';
import { connect } from 'react-redux';
import WeatherPagination from './pagination/WeatherPagination.js';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const radioGroupStyle = {
  display: 'inline-block',
  marginRight: 10
};

const pageTitle = {
  display: 'flex',
  justifyContent: "space-around",
  height: 60,
  backgroundColor: "grey",
  color: "white"
}
class App extends React.Component {

  state = {
    value: 'imperial',
  };

  getWeather(unit) {
    if (unit === undefined) {
      unit = 'imperial';
    }
    var self = this;
    var tempUnit = (unit === 'imperial') ? 'F' : 'C';
    const city = 'Munich,de';
    const authKey = '75f972b80e26f14fe6c920aa6a85ad57';
    const count = 10;

    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=` + city + `
    &APPID=`+ authKey + `&cnt=` + count + `&units=` + unit;

    fetch(apiUrl)
      .then(res => res.json())
      .then(json => {
        var list = json.list;
        var loading = false;
        self.props.dispatch(setCity(json.city));
        self.props.dispatch(setData(list));
        self.props.dispatch(setLoading(loading));
        self.props.dispatch(setTempUnit(tempUnit));
      });
  }
  componentDidMount() {
    this.getWeather();
  }

  updateTempUnit(event) {
    this.setState({
      value: event.target.value
    });
    this.getWeather(event.target.value);
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <div className="loadingContainer">
            <p className="loadingText">Loading....</p>
          </div>
        ) : (
            <div id="page2">
              <div id="pageTitle" style={pageTitle}>
                <h3>Optile Weather App</h3>
                <h5>City - {this.props.city.name}</h5>
              </div>

              <div className="container" style={{ textAlign: "center" }}>
                <div id="radioGroup" style={{ margin: 50 }}>
                  <FormControl>
                    <FormLabel component="legend">Temperature Unit</FormLabel>
                    <RadioGroup
                      aria-label="Unit"
                      name="unit"
                      value={this.state.value}
                      onChange={this.updateTempUnit.bind(this)}
                      style={radioGroupStyle}
                    >
                      <FormControlLabel value="metric" control={<Radio color="primary" />} label="Celcius" />
                      <FormControlLabel value="imperial" control={<Radio color="primary" />} label="Farenheit" />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div>
                  <WeatherPagination item={this.props.data} tempUnit={this.props.tempUnit} />
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }

}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(App);
