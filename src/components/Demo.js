import React from "react";
// import MadeGoal from "./MadeGoal";
// import MissedGoal from "./MissedGoal";

const Demo = (props) => {
    const a = 10;
    var name;
    const cars =["Ford", "BMW", "Scoda", "Benz", "Suzuki","Tata"]

    const passwordRegex = /^abc\s+xyx\s+\d{2}\s+\d{2}\s+[a-z]\s+[a-z]\s+[a-z] /;
    
    // const bool=true;

    // if(bool) {
    //     return <MadeGoal/>;
    // }
    // return <MissedGoal/>;


    const handleClick = (x, y) => {
        alert(x + y);
    };

    const handleNameChange = (event) => {
        // console.log(event.target.value);
        name = event.target.value;
    };

    const handlePasswordChange = (event) => {
        if (passwordRegex.test(event.target.value)) {
            console.log("match");
        }else{
            console.log("not match");
        }
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
    };


    return (
        <div>
            <h2>New Component</h2>

            <ol>
                {cars.map((cars, i) => (
                    <li key={i}>{cars}</li>
                ))}
            </ol> 

            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" name="user_name" onChange={handleNameChange}/>
                <label>Password : </label>
                <input type='password' name="password" onChange={handlePasswordChange} />
                <input type="submit" />
            </form>

            {/* /{a ===10 && <h4>{props.para}</h4>} */}

            {/* {{a >=10 ? <MadeGoal /> : <MissedGoal />}} */}

            <button onClick={() => handleClick(10, 50)}>Button</button>
        </div>
    );
};

export default Demo;