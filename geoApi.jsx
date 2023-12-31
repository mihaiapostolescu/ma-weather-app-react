const VITE_GEO_API_KEY = import.meta.env.VITE_GEO_API_KEY
const VITE_API_KEY = import.meta.env.VITE_API_KEY

export const geoApiOptions = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': VITE_GEO_API_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const VITE_GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/3.0';

export const WEATHER_API_KEY = VITE_API_KEY;