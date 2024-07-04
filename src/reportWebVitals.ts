import {onCLS, onINP, onLCP} from 'web-vitals';


const reportWebVitals = () => {
  onCLS(console.log);
  onINP(console.log);
  onLCP(console.log);
};

export default reportWebVitals;
