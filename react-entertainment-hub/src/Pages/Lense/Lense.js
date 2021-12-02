import { React, useState } from "react";
import { SpinnerInfinity } from 'spinners-react';


const Lense = () => {
    const [srcUrl, setUrl] = useState('http://localhost:9966/');
    const [loading, setLoading] = useState(true);
    const errorUrl = () => {
        setUrl('https://c.tenor.com/eDchk3srtycAAAAi/piffle-error.gif');
        console.log("Error");
    }

    const hideSpinner = () => {
        setLoading(false);
    };

    return (
        // <iframe src={srcUrl} onError={errorUrl} style={{ width: '100%', height: '1000px', overflow: 'auto' }} />
        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            {loading ? (
                <SpinnerInfinity size={1000} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(57, 172, 121, 0.28)" />
            ) : null}
            <iframe
                src={srcUrl}
                width="100%"
                height="1000px"
                onLoad={hideSpinner}
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
            />
        </div>
    );

};

export default Lense;
