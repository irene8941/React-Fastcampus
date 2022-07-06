import React, { useState, useEffect } from "react";
import withLoading from "./withLoading";

function Button() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return loading ? <p>Loading...</p> : <button>Button</button>;
    return <button>Button</button>;
}

export default withLoading(Button);
