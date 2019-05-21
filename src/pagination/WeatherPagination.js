import React from 'react';
import WeatherCard from '../weather-card/WeatherCard.js';
import SvgIcon from '@material-ui/core/SvgIcon';

const divStyle = {
    display: 'inline-block',
    marginRight: 10
};
const buttonStyle = {
    background: "none",
    border: "none",
};

const buttonGroup = {
    display: "flex",
    textAlign: "justify",
    marginBottom: 100,
    justifyContent: "space-around"
}
class WeatherPagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            cardsPerPage: 3
        };
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    handlePrev() {
        this.setState({
            currentPage: this.state.currentPage - 1
        });
    }
    handleNext() {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
    }
    render() {
        const { currentPage, cardsPerPage } = this.state;
        const weatherCard = this.props.item;
        const tempUnit = this.props.tempUnit;
        const indexOfLastCard = currentPage * cardsPerPage;
        const indexOfFirstCard = indexOfLastCard - cardsPerPage;
        const currentCard = weatherCard.slice(indexOfFirstCard, indexOfLastCard);
        var totalPages = parseInt(((weatherCard.length) / cardsPerPage) + 1);
        const renderCard = currentCard.map((card, index) => {
            return (
                <div key={index} id="weatherCard" style={divStyle}>
                    <WeatherCard temp={card.main.temp} date={card.dt_txt} tempUnit={tempUnit}
                        weatherConditon={card.weather[0].main} />
                </div>
            );
        });
        return (
            <div>
                <div id="buttonGroup" style={buttonGroup}>
                    <button hidden={currentPage === 1} onClick={this.handlePrev} style={buttonStyle}>
                        <SvgIcon fontSize="large" color="primary">
                            <path d="M0 12l9-8v6h15v4h-15v6z" />
                        </SvgIcon>
                    </button>
                    <button hidden={currentPage === totalPages} onClick={this.handleNext} style={buttonStyle}>
                        <SvgIcon fontSize="large" color="primary">
                            <path d="M24 12l-9-8v6h-15v4h15v6z" />
                        </SvgIcon>
                    </button>
                </div>
                <div>
                    {renderCard}
                </div>
            </div>
        );
    }
}

export default WeatherPagination;