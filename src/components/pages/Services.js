import React, { useEffect, useState } from "react";
import Home from "./Home";
import classes from "./Style.module.css";
import "./Style.css";

const Services = () => {
    const [isData, setIsData] = useState("Hello");
    const[count,setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => count +1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = () => {
        setIsData("World");
    };

    return (
        <div>
            <Home />
            <h1 className={classes.body}>Services page</h1>
            <h1 className={'${classes.body} demo'}>Services page</h1>
            <p>{isData}</p>
            <p>{count}</p>
            <button onClick={handleChange}>Change</button>
            {/* <p className="demo">Paragraph</p> */}
        </div>

    );
};

export default Services;