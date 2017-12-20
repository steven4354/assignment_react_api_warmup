import React, {Component} from "react";
import {Button} from "react-bootstrap";

const ButtonInstance = ({text}) => {
  return (
    <Button type="submit" bsStyle="primary">
      {text}
    </Button>
  );
};

export default ButtonInstance;
