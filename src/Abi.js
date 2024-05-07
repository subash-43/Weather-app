export const url = import.meta.env.VITE_ABI_URL;

export const GeoAbiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_ABI_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};


export const WEATHER_API_URL = import.meta.env.VITE_ABI_WEATHER;

export const WEATHER_API_KEY = import.meta.env.VITE_ABI_WEATHER_API_KEY;