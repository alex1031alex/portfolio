import "./Logo.css";
import React from "react";

export const Logo = () => {
  return (
    <div className="logo">
      <svg width="150" height="120" viewBox="0 0 300 240" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" fill="currentColor"
                d="M94 116 L286 152 L218  236 L33 164 L94 116Z M262 163 L252 174 L88 127 L262 163Z M236 187 L245 179 L106 142 L236 187Z"/>
        <path
          d="M101 101 L271 120 L278 23 L157 28 V15 L299 0 L290 146 L101 112 V101Z"
          fill="currentColor"
        />
        <text
          x="32"
          y="66"
          fill="current-color"
          fontSize="32px"
          fontWeight="600"
          letterSpacing="2"
          fontFamily="Helvetica"
        >
          ALEXBYALEX
        </text>
        <text
          x="11"
          y="94"
          fill="currentColor"
          fontSize="14px"
          letterSpacing="5"
          fontWeight="500"
        >
          NOTHING'S TOO SMALL
        </text>
      </svg>
    </div>
  );
};
