import axios from "axios";

class HTTPMedthod {
	constructor() {
		this.axios = axios;
		this.axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
			? process.env.REACT_APP_BASE_URL
			: "http://localhost:8080/api";
	}

	get = (...props) => axios.get(...props);

	put = (...props) => axios.put(...props);

	post = (...props) => axios.post(...props);

	delete = (...props) => axios.delete(...props);
}

export default new HTTPMedthod();
