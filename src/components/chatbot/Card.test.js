import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Card
      payload={{
        fields: {
          description: {
            kind: "stringValue",
            stringValue: "The"
          },
          header: {
            kind: "stringValue",
            stringValue: "The"
          },
          image: {
            kind: "stringValue",
            stringValue:
              "https://i.udemycdn.com/course/480x270/625204_436a_2.jpg"
          },
          link: {
            kind: "stringValue",
            stringValue: "https://www.udemy.com/the-web-developer-bootcamp/"
          },
          price: {
            kind: "stringValue",
            stringValue: "$11.99"
          }
        }
      }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
