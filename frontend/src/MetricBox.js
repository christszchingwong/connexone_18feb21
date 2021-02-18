import { useEffect, useState } from 'react';
import axios from 'axios';

let axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `mysecrettoken`
  }
});


function MetricBox() {
  const [loading, setLoading] = useState(true);

  const [metrics, setMetrics] = useState(undefined);
  useEffect(() => {
    function fetch() {
      setLoading(true);
      axiosInstance.get("/metrics").then((res) => {
        setLoading(false);
        if (res.status === 200) {
          setMetrics(res.data);
        }
      });
    }
    fetch();
    let h = setInterval(fetch, 30 * 1000);
    return function () {
      clearInterval(h);
    }
  }, []);
  return (
    <div className="box">
      {loading && 'Loading...'}
      {metrics}
    </div>
  );
}

export default MetricBox;
