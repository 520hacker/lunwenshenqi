const baseURL = window.location.hostname === 'localhost'
  ? (window.location.host === 'localhost:8080' || window.location.host === 'localhost:8081' ? 'http://localhost:5000' : process.env.BASE_URL || 'http://localhost:5000')
  : `//${window.location.hostname}`;

export default baseURL;