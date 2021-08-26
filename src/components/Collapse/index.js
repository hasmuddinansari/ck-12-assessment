import React from "react";
import {
  CollapseWrapper,
  CheckBox,
  Header,
  Label,
  CollapseChild,
} from "./styled";

export const Collapse = ({ title, id }) => (
  <CollapseWrapper>
    <CheckBox type="checkbox" id={id} />
    <Header>
      <Label htmlFor={id}>{title}</Label>
    </Header>
    <CollapseChild className="collapse-child">
      <p>This a very very simple accordion.</p>
    </CollapseChild>
  </CollapseWrapper>
);
