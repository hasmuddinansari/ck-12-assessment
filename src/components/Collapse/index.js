import React, { useRef } from "react";
import { CollapseWrapper, Header, CollapseChild } from "./styled";

export const Collapse = ({ title, children, onHeaderClick, childSize }) => {
  const collapseRef = useRef(null);
  const iconRef = useRef(null);

  const openCollapse = () => {
    onHeaderClick();
    collapseRef.current.classList.toggle("collapse");
    iconRef.current.classList.toggle("rotate");
  };

  return (
    <CollapseWrapper>
      <Header role="presentation" onClick={openCollapse}>
        <svg
          ref={iconRef}
          height="14"
          width="14"
          strokeWidth="2"
          stroke="#1D1D1D"
        >
          <path transform="translate(5,1)" d="M0 0 L6 6 L0 12 L6 6 Z"></path>
        </svg>
        <p>{title}</p>
      </Header>
      <CollapseChild
        ref={collapseRef}
        size={childSize}
        className="collapse-child"
      >
        {children}
      </CollapseChild>
    </CollapseWrapper>
  );
};
