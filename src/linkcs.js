import React from "react";
import { Appear } from "mdx-deck";

const imgStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  maxHeight: "100%",
  maxWidth: "100%",
  transform: "translate(-50%, -50%)"
};

const LinkCS = ({ step }) => {
  const Wrapper = step ? Appear : React.Fragment;

  return (
    <div style={{ height: "90vh", position: "relative" }}>
      <img src="./images/linkcs.png" alt="linkcs" style={imgStyle} />
      <div>
        <svg viewBox="0 0 1190 1310" style={imgStyle}>
          <defs>
            <style>
              {`
      .cls-2, .cls-3, .cls-4 {
        fill: none;
      }

      .cls-2 {
        stroke: #707070;
      }

      .cls-2, .cls-3, .cls-4 {
        stroke-width: 2px;
      }

      .cls-3 {
        stroke: #4183c4;
      }

      .cls-4 {
        stroke: #bebebe;
      }

      .cls-5 {
        fill: #707070;
      }

      .cls-5, .cls-6, .cls-7 {
        font-size: 25px;
        font-family: HelveticaNeue, Helvetica Neue;
      }

      .cls-6 {
        fill: #4183c4;
      }

      .cls-7 {
        fill: #a0a0a0;
      }
      `}
            </style>
          </defs>
          <Wrapper>
            <g>
              <g className="cls-2" transform="translate(432 34)">
                <rect x="1" y="1" width="167" height="72" />
              </g>
              <g className="cls-2" transform="translate(607 34)">
                <rect x="1" y="1" width="139" height="72" />
              </g>
              <text className="cls-5" transform="translate(760 75)">
                button
              </text>
            </g>

            <g>
              <g className="cls-2" transform="translate(442 120)">
                <rect x="1" y="1" width="296" height="293" />
              </g>
              <text className="cls-5" transform="translate(755 292)">
                img
              </text>
            </g>

            <g>
              <g className="cls-2" transform="translate(442 435)">
                <rect x="1" y="1" width="296" height="50" />
              </g>
              <text className="cls-5" transform="translate(755 471)">
                h3
              </text>
            </g>

            <g>
              <g className="cls-2" transform="translate(64.624 499)">
                <rect x="1" y="1" width="1049.376" height="41" />
              </g>
              <g className="cls-2" transform="translate(64.624 549)">
                <rect x="1" y="1" width="1049.376" height="75" />
              </g>
              <g className="cls-2" transform="translate(65 638)">
                <rect x="1" y="1" width="1049.376" height="52" />
              </g>
              <text className="cls-5" transform="translate(449 588)">
                div
              </text>
            </g>

            <g>
              <g className="cls-3" transform="translate(707 799)">
                <rect x="1" y="1" width="397.957" height="35" />
              </g>
              <g className="cls-3" transform="translate(638 840)">
                <rect x="1" y="1" width="466.957" height="31" />
              </g>
              <g className="cls-3" transform="translate(934.957 888)">
                <rect x="1" y="1" width="170" height="38" />
              </g>
              <text className="cls-6" transform="translate(901 785)">
                a
              </text>
            </g>

            <g>
              <g className="cls-4" transform="translate(942 1048)">
                <rect x="1" y="1" width="159" height="37" />
              </g>
              <text className="cls-7" transform="translate(1006 1032)">
                span
              </text>
            </g>
          </Wrapper>
        </svg>
      </div>
    </div>
  );
};

LinkCS.defaultProps = {
  step: true
};

export default LinkCS;
