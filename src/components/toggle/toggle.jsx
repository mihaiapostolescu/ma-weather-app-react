import "../toggle/toggle.css"
import React, { useState } from 'react';

const ToggleItem = () => {
    const [visible, setVisible] = useState(false);

    const handleButtonClick = () => {
        setVisible(!visible);
        document.body.style.overflowY = visible ? 'visible' : 'hidden';
    };

    return (
        <nav className="navigation flexr">
            <button
                className={`mobile-nav__toggle ${visible ? 'mobile-nav__toggle2' : ''}`}
                aria-controls="primaryNav emptySpace"
                aria-expanded={visible ? 'true' : 'false'}
                id="toggleButton"
                onClick={handleButtonClick}
            >
                <span className="sr-only">Menu</span>
            </button>
            <ul
                id="primaryNav"
                className="main__navigation flexc spaced"
                data-visible={visible}
            >
                <li className="navigation__item">
                    <a href="https://www.weather.com" target="_blank">
                        Live weather
                    </a>
                </li>
                <li className="navigation__item">
                    <a href="https://www.weather.com" target="_blank">
                        24h Forecast
                    </a>
                </li>
                <li className="navigation__item">
                    <a href="https://www.weather.com" target="_blank">
                        10Day Forecast
                    </a>
                </li>
                <li className="navigation__item">
                    <a href="https://www.weather.com" target="_blank">
                        Favorite Cities
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default ToggleItem;
