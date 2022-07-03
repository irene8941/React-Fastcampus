import React from "react";

export default function Condition() {
  //   const isLoggedIn = false;
  const isLoggedIn = true;

  const UserGreeting = (props) => {
    return (
      <h1>
        {props.name && `${props.name},`} Welcome{" "}
        {props.count ? `It's ${props.count} times` : null}
      </h1>
    );
  };

  const GuestGreeting = (props) => {
    return <h1>Please sign up</h1>;
  };

  const Greeting = (props) => {
    // if (props.isLoggedIn) {
    //   return <UserGreeting name="jimmy" count={0} />;
    // }
    // return <GuestGreeting />;

    return props.isLoggedIn ? (
      <UserGreeting name="timmy" count={0} />
    ) : (
      <GuestGreeting />
    );
  };
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
