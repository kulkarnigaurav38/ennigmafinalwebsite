import React from "react";

const newpage = ({ counter }) => {
  if (counter < 4) {
    return <p>You are not depressed</p>;
  } else if (counter == 4) {
    return <p>You have mild depression</p>;
  } else if (counter >= 5 && counter <= 6) {
    return <p>You have moderate depression</p>;
  } else {
    return (
      <p>
        It's a matter of concern, you are most likely be suffering from seveve
        depression.
      </p>
    );
  }
};

export default newpage;
