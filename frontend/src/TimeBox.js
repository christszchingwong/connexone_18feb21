import { useEffect, useState } from 'react';
import axios from 'axios';

let axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `mysecrettoken`
  }
});

function TimeBox(props) {
  const [loading, setLoading] = useState(true);
  // clientTime
  const [clientTime, setClientTime] = useState(Math.floor(Date.now() / 1000));

  useEffect(() => {
    let h = setInterval(() => {
      setClientTime(Math.floor(Date.now() / 1000));
    }, 1000);
    return function () {
      clearInterval(h);
    }
  }, []);

  const [serverEpoch, setServerEpoch] = useState(undefined);
  useEffect(() => {
    function FetchServerEpoch() {
      setLoading(true);
      axiosInstance.get("/time").then((res) => {
        setLoading(false);
        if (res.status === 200) {
          setServerEpoch(res.data.epoch);
        }
      });
    }
    FetchServerEpoch();
    let h = setInterval(FetchServerEpoch, 30 * 1000);
    return function () {
      clearInterval(h);
    }
  }, []);


  let timeDifference;
  if (serverEpoch !== undefined) {
    const secondDifference = Math.abs(clientTime - serverEpoch);
    const [ss, mm, HH] = [secondDifference % 60, Math.floor((secondDifference % 3600) / 60), Math.floor(secondDifference / 3600)]
    const padToTwo = (num) => {
      return ("00" + num).slice(-2);
    }
    timeDifference = `${padToTwo(HH)}:${padToTwo(mm)}:${padToTwo(ss)}`;
  }
  return (
    <div className="box">
      {loading && 'Loading...'}
      <div className="serverTime">
        {serverEpoch}
      </div>
      <div className="difference">
        {timeDifference}
      </div>
    </div>
  );
}

export default TimeBox;
