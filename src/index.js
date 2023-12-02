import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


let Data=[
    {
        Id: 1,
        ToMeet: "person1",
        Date: "2023-12-09",
        Time: "10:00 AM",
        Purpose: "Medical Checkup",
      },
      {
        Id: 2,
        ToMeet: "person2",
        Date: "2023-12-20",
        Time: "11:00 AM",
        Purpose: "Medical Checkup",
      },
      {
        Id: 3,
        ToMeet: "person3",
        Date: "2023-12-21",
        Time: "2:00 PM ",
        Purpose: "Medical Checkup",
      },
]




ReactDOM.createRoot(document.getElementById("root")).render(<App Data={Data}/>);
