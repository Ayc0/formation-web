import React, { useState } from "react";

const Lifecycle = ({ style }) => {
  const [selected, setSeletected] = useState("newProps");

  const onClick = value => event => {
    setSeletected(value);

    let baseQuery = "#Lifecycles #Updating .conditional";
    let toHide = document.querySelectorAll(baseQuery + ":not(." + value + ")");
    for (let j = 0; j < toHide.length; j++) {
      toHide[j].style.opacity = "0";
    }
    let toShow = document.querySelectorAll(baseQuery + "." + value);
    for (let j = 0; j < toShow.length; j++) {
      toShow[j].style.opacity = "1";
    }
  };

  return (
    <svg
      viewBox="0 0 743 790"
      version="1.1"
      style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 1.41421, ...style }}
      id="Lifecycles"
    >
      <defs>
        <pattern id="pattern-stripe" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(90)">
          <rect width="4" height="5" fill="white" />
        </pattern>
        <mask id="mask-stripe">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
        </mask>
        <style>
          {`
      #Lifecycles text {
        font-family: 'Consolas', monospace;
      }
      
      #Lifecycles .card {
        fill: #272c35;
      }
    
      #Lifecycles text.lifecycle {
        font-size: 13px;
        fill: #65b8f8;
      }
      #Lifecycles text.params {
        font-size: 11px;
        fill: #ff8b9c;
      }
      #Lifecycles text.details {
        font-size: 11px;
        fill: #cba3c7;
      }
    
      #Lifecycles path.arrow {
        fill: #999;
      }
      #Lifecycles .select path.arrow {
        mask: url(#mask-stripe);
      }
      #Lifecycles .select.chosen path.arrow {
        mask: none;
      }
    
      #Lifecycles .annotation rect {
        fill: #ffe444;
        fill-opacity: 0.2;
      }
       #Lifecycles .annotation text {
        font-size: 11px;
        fill: #1a1a1a;
      }
    
      #Lifecycles #Updating .select:hover {
        cursor: pointer;
      }
      #Lifecycles #Updating .select text {
        font-size: 10px;
        fill: #1a1a1a;
      }
      #Lifecycles #Updating .select.chosen text {
        font-size: 11px;
        font-weight: bold;
      }
    
      #Lifecycles #Updating .cross {
        fill:#ff0034;
      }

      #Lifecycles #Updating .conditional {
        transition: opacity 0.3s;
      }
      `}
        </style>
      </defs>
      <g id="Mounting">
        <g>
          <path
            d="M237.878,67.636c0,-3.158 -2.564,-5.722 -5.722,-5.722l-205.276,0c-3.158,0 -5.722,2.564 -5.722,5.722l0,50.458c0,3.158 2.564,5.722 5.722,5.722l205.276,0c3.158,0 5.722,-2.564 5.722,-5.722l0,-50.458Z"
            className="card"
          />
          <text x="186.601px" y="115.944px" className="params">
            (props)
          </text>
          <text x="86.96px" y="89.994px" className="lifecycle">
            constructor
          </text>
        </g>
        <g>
          <path
            d="M130.488,126.62c0,-0.637 -0.517,-1.154 -1.153,-1.154c-0.637,0 -1.154,0.517 -1.154,1.154l0,21.319c0,0.637 0.517,1.153 1.154,1.153c0.636,0 1.153,-0.516 1.153,-1.153l0,-21.319Z"
            className="arrow"
          />
          <path
            d="M129.335,151.137l3.926,-3.926c0.45,-0.45 1.181,-0.45 1.631,0c0.45,0.45 0.45,1.181 0,1.631l-4.742,4.741c-0.225,0.225 -0.52,0.338 -0.815,0.338c-0.296,0 -0.591,-0.113 -0.816,-0.338l-4.741,-4.741c-0.451,-0.45 -0.451,-1.181 0,-1.631c0.45,-0.45 1.181,-0.45 1.631,0l3.926,3.926Z"
            className="arrow"
          />
        </g>
        <g>
          <path
            d="M237.878,161.056c0,-3.158 -2.564,-5.722 -5.722,-5.722l-205.276,0c-3.158,0 -5.722,2.564 -5.722,5.722l0,50.458c0,3.158 2.564,5.722 5.722,5.722l205.276,0c3.158,0 5.722,-2.564 5.722,-5.722l0,-50.458Z"
            className="card"
          />
          <text x="114.026px" y="209.364px" className="params">
            (props, prevState)
          </text>
          <text x="29.497px" y="209.364px" className="details">
            STATIC
          </text>
          <text x="36.928px" y="183.414px" className="lifecycle">
            getDerivedStateFromProps
          </text>
        </g>
        <g>
          <path
            d="M130.612,220.062c0,-0.637 -0.517,-1.154 -1.154,-1.154c-0.636,0 -1.153,0.517 -1.153,1.154l0,21.319c0,0.637 0.517,1.153 1.153,1.153c0.637,0 1.154,-0.516 1.154,-1.153l0,-21.319Z"
            className="arrow"
          />
          <path
            d="M129.458,244.579l3.926,-3.926c0.451,-0.45 1.181,-0.45 1.632,0c0.45,0.45 0.45,1.181 0,1.631l-4.742,4.741c-0.225,0.225 -0.52,0.338 -0.816,0.338c-0.295,0 -0.59,-0.113 -0.815,-0.338l-4.742,-4.741c-0.45,-0.45 -0.45,-1.181 0,-1.631c0.45,-0.45 1.181,-0.45 1.631,0l3.926,3.926Z"
            className="arrow"
          />
        </g>
        <g>
          <path
            d="M237.855,254.472c0,-3.158 -2.564,-5.722 -5.722,-5.722l-205.276,0c-3.158,0 -5.722,2.564 -5.722,5.722l0,50.458c0,3.158 2.564,5.722 5.722,5.722l205.276,0c3.158,0 5.722,-2.564 5.722,-5.722l0,-50.458Z"
            className="card"
          />
          <text x="29.474px" y="302.78px" className="details">
            UNSAFE
          </text>
          <text x="59.996px" y="276.83px" className="lifecycle">
            componentWillMount
          </text>
        </g>
        <g>
          <path
            d="M130.245,313.512c0,-0.637 -0.516,-1.154 -1.153,-1.154c-0.636,0 -1.153,0.517 -1.153,1.154l0,21.319c0,0.637 0.517,1.153 1.153,1.153c0.637,0 1.153,-0.516 1.153,-1.153l0,-21.319Z"
            className="arrow"
          />
          <path
            d="M129.092,338.029l3.926,-3.926c0.45,-0.45 1.181,-0.45 1.631,0c0.45,0.45 0.45,1.181 0,1.631l-4.741,4.741c-0.225,0.225 -0.521,0.338 -0.816,0.338c-0.295,0 -0.59,-0.113 -0.815,-0.338l-4.742,-4.741c-0.45,-0.45 -0.45,-1.181 0,-1.631c0.45,-0.45 1.181,-0.45 1.631,0l3.926,3.926Z"
            className="arrow"
          />
        </g>
        <g>
          <path
            d="M237.878,347.896c0,-3.158 -2.564,-5.722 -5.722,-5.722l-205.276,0c-3.158,0 -5.722,2.564 -5.722,5.722l0,50.458c0,3.158 2.564,5.722 5.722,5.722l205.276,0c3.158,0 5.722,-2.564 5.722,-5.722l0,-50.458Z"
            className="card"
          />
          <text x="106.203px" y="370.254px" className="lifecycle">
            render
          </text>
        </g>
        <g>
          <path
            d="M130.488,406.898c0,-0.637 -0.517,-1.154 -1.153,-1.154c-0.637,0 -1.154,0.517 -1.154,1.154l0,21.319c0,0.637 0.517,1.153 1.154,1.153c0.636,0 1.153,-0.516 1.153,-1.153l0,-21.319Z"
            className="arrow"
          />
          <path
            d="M129.335,431.415l3.926,-3.926c0.45,-0.45 1.181,-0.45 1.631,0c0.45,0.45 0.45,1.181 0,1.631l-4.742,4.741c-0.225,0.225 -0.52,0.338 -0.815,0.338c-0.296,0 -0.591,-0.113 -0.816,-0.338l-4.741,-4.741c-0.451,-0.45 -0.451,-1.181 0,-1.631c0.45,-0.45 1.181,-0.45 1.631,0l3.926,3.926Z"
            className="arrow"
          />
        </g>
        <g>
          <path
            d="M237.635,441.256c0,-3.158 -2.564,-5.722 -5.722,-5.722l-205.276,0c-3.158,0 -5.722,2.564 -5.722,5.722l0,50.458c0,3.158 2.564,5.722 5.722,5.722l205.276,0c3.158,0 5.722,-2.564 5.722,-5.722l0,-50.458Z"
            className="card"
          />
          <text x="63.626px" y="463.614px" className="lifecycle">
            componentDidMount
          </text>
        </g>
      </g>
      <g id="Updating">
        <g className={selected === "newProps" ? "chosen select" : "select"} onClick={onClick("newProps")}>
          <text x="265.961px" y="69.184px">
            new props
          </text>
          <g>
            <path
              d="M306.934,74.064c0,-0.636 -0.517,-1.153 -1.154,-1.153c-0.636,0 -1.153,0.517 -1.153,1.153l0,21.319c0,0.637 0.517,1.154 1.153,1.154c0.637,0 1.154,-0.517 1.154,-1.154l0,-21.319Z"
              className="arrow"
            />
            <path
              d="M305.78,98.581l3.926,-3.926c0.45,-0.45 1.181,-0.45 1.631,0c0.45,0.45 0.45,1.181 0,1.631l-4.741,4.742c-0.225,0.225 -0.521,0.337 -0.816,0.337c-0.295,0 -0.59,-0.112 -0.815,-0.337l-4.742,-4.742c-0.45,-0.45 -0.45,-1.181 0,-1.631c0.45,-0.45 1.181,-0.45 1.631,0l3.926,3.926Z"
              className="arrow"
            />
          </g>
        </g>
        <g className={selected === "setState" ? "chosen select" : "select"} onClick={onClick("setState")}>
          <text x="334.482px" y="69.184px">
            setState()
          </text>
          <g>
            <path
              d="M370.534,74.064c0,-0.636 -0.517,-1.153 -1.154,-1.153c-0.636,0 -1.153,0.517 -1.153,1.153l0,21.319c0,0.637 0.517,1.154 1.153,1.154c0.637,0 1.154,-0.517 1.154,-1.154l0,-21.319Z"
              className="arrow"
            />
            <path
              d="M369.38,98.581l3.926,-3.926c0.45,-0.45 1.181,-0.45 1.631,0c0.45,0.45 0.45,1.181 0,1.631l-4.741,4.742c-0.225,0.225 -0.521,0.337 -0.816,0.337c-0.295,0 -0.59,-0.112 -0.815,-0.337l-4.742,-4.742c-0.45,-0.45 -0.45,-1.181 0,-1.631c0.45,-0.45 1.181,-0.45 1.631,0l3.926,3.926Z"
              className="arrow"
            />
          </g>
        </g>
        <g className={selected === "forceUpdate" ? "chosen select" : "select"} onClick={onClick("forceUpdate")}>
          <text x="402.008px" y="69.243px">
            forceUpdate()
          </text>
          <g>
            <path
              d="M434.134,74.064c0,-0.636 -0.517,-1.153 -1.154,-1.153c-0.636,0 -1.153,0.517 -1.153,1.153l0,21.319c0,0.637 0.517,1.154 1.153,1.154c0.637,0 1.154,-0.517 1.154,-1.154l0,-21.319Z"
              className="arrow"
            />
            <path
              d="M432.98,98.581l3.926,-3.926c0.45,-0.45 1.181,-0.45 1.631,0c0.45,0.45 0.45,1.181 0,1.631l-4.741,4.742c-0.225,0.225 -0.521,0.337 -0.816,0.337c-0.295,0 -0.59,-0.112 -0.815,-0.337l-4.742,-4.742c-0.45,-0.45 -0.45,-1.181 0,-1.631c0.45,-0.45 1.181,-0.45 1.631,0l3.926,3.926Z"
              className="arrow"
            />
          </g>
        </g>
        <g className="conditional newProps">
          <path
            d="M477.74,108.74c0,-3.158 -2.564,-5.722 -5.722,-5.722l-205.276,0c-3.158,0 -5.722,2.564 -5.722,5.722l0,50.458c0,3.158 2.564,5.722 5.722,5.722l205.276,0c3.158,0 5.722,-2.564 5.722,-5.722l0,-50.458Z"
            className="card"
          />
          <text x="400.072px" y="157.048px" className="params">
            (nextProps)
          </text>
          <text x="269.359px" y="157.048px" className="details">
            UNSAFE
          </text>
          <text x="272.942px" y="131.098px" className="lifecycle">
            componentWillReceiveProps
          </text>
        </g>
        <g className="conditional newProps">
          <path
            d="M370.474,167.75c0,-0.636 -0.517,-1.153 -1.153,-1.153c-0.637,0 -1.154,0.517 -1.154,1.153l0,21.319c0,0.637 0.517,1.154 1.154,1.154c0.636,0 1.153,-0.517 1.153,-1.154l0,-21.319Z"
            className="arrow"
          />
          <path
            d="M369.321,192.267l3.926,-3.926c0.45,-0.45 1.181,-0.45 1.631,0c0.45,0.45 0.45,1.181 0,1.631l-4.742,4.742c-0.225,0.225 -0.52,0.337 -0.815,0.337c-0.295,0 -0.591,-0.112 -0.816,-0.337l-4.741,-4.742c-0.45,-0.45 -0.45,-1.181 0,-1.631c0.45,-0.45 1.181,-0.45 1.631,0l3.926,3.926Z"
            className="arrow"
          />
        </g>
        <g className="conditional newProps setState forceUpdate">
          <path
            d="M477.74,202.186c0,-3.158 -2.564,-5.722 -5.722,-5.722l-205.276,0c-3.158,0 -5.722,2.564 -5.722,5.722l0,50.458c0,3.158 2.564,5.722 5.722,5.722l205.276,0c3.158,0 5.722,-2.564 5.722,-5.722l0,-50.458Z"
            className="card"
          />
          <text x="353.889px" y="250.494px" className="params">
            (props, prevState)
          </text>
          <text x="269.359px" y="250.494px" className="details">
            STATIC
          </text>
          <text x="276.79px" y="224.544px" className="lifecycle">
            getDerivedStateFromProps
          </text>
        </g>
        <g className="conditional newProps setState forceUpdate">
          <path
            d="M370.474,261.196c0,-0.636 -0.517,-1.153 -1.153,-1.153c-0.637,0 -1.154,0.517 -1.154,1.153l0,21.319c0,0.637 0.517,1.154 1.154,1.154c0.636,0 1.153,-0.517 1.153,-1.154l0,-21.319Z"
            className="arrow"
          />
          <path
            d="M369.321,285.713l3.926,-3.926c0.45,-0.45 1.181,-0.45 1.631,0c0.45,0.45 0.45,1.181 0,1.631l-4.742,4.742c-0.225,0.225 -0.52,0.337 -0.815,0.337c-0.295,0 -0.591,-0.112 -0.816,-0.337l-4.741,-4.742c-0.45,-0.45 -0.45,-1.181 0,-1.631c0.45,-0.45 1.181,-0.45 1.631,0l3.926,3.926Z"
            className="arrow"
          />
        </g>
        <g className="conditional newProps setState">
          <path
            d="M477.717,295.606c0,-3.158 -2.564,-5.722 -5.722,-5.722l-205.276,0c-3.158,0 -5.722,2.564 -5.722,5.722l0,50.458c0,3.158 2.564,5.722 5.722,5.722l205.276,0c3.158,0 5.722,-2.564 5.722,-5.722l0,-50.458Z"
            className="card"
          />
          <text x="327.475px" y="343.914px" className="params">
            (nextProps, nextState)
          </text>
          <text x="288.313px" y="317.964px" className="lifecycle">
            shouldComponentUpdate
          </text>
        </g>
        <g className="conditional newProps setState">
          <path
            d="M306.938,354.642c0,-0.636 -0.517,-1.153 -1.153,-1.153c-0.637,0 -1.153,0.517 -1.153,1.153l0,21.319c0,0.637 0.516,1.154 1.153,1.154c0.636,0 1.153,-0.517 1.153,-1.154l0,-21.319Z"
            className="arrow"
          />
          <path
            d="M305.785,379.159l3.926,-3.926c0.45,-0.45 1.181,-0.45 1.631,0c0.45,0.45 0.45,1.181 0,1.631l-4.742,4.742c-0.225,0.225 -0.52,0.337 -0.815,0.337c-0.295,0 -0.591,-0.112 -0.816,-0.337l-4.741,-4.742c-0.45,-0.45 -0.45,-1.181 0,-1.631c0.45,-0.45 1.181,-0.45 1.631,0l3.926,3.926Z"
            className="arrow"
          />
        </g>
        <g className="conditional newProps setState annotation">
          <rect x="309.72" y="359.018" width="27.275" height="9.55" />
          <text x="310.333px" y="367.368px">
            true
          </text>
        </g>
        <g className="conditional newProps setState">
          <path
            d="M434.214,354.642c0,-0.636 -0.517,-1.153 -1.154,-1.153c-0.636,0 -1.153,0.517 -1.153,1.153l0,10.531c0,0.637 0.517,1.154 1.153,1.154c0.637,0 1.154,-0.517 1.154,-1.154l0,-10.531Z"
            className="arrow"
          />
          <path
            d="M433.06,368.371l3.926,-3.926c0.451,-0.45 1.181,-0.45 1.632,0c0.45,0.45 0.45,1.181 0,1.631l-4.742,4.741c-0.225,0.225 -0.52,0.338 -0.816,0.338c-0.295,0 -0.59,-0.113 -0.815,-0.338l-4.742,-4.741c-0.45,-0.45 -0.45,-1.181 0,-1.631c0.451,-0.45 1.181,-0.45 1.632,0l3.925,3.926Z"
            className="arrow"
          />
        </g>
        <g className="conditional newProps setState annotation">
          <rect x="392.035" y="357.888" width="33.748" height="10.679" />
          <text x="392.526px" y="367.368px">
            false
          </text>
        </g>
        <path
          d="M433.06,376.097l2.235,-2.235c0.45,-0.45 1.181,-0.45 1.631,0c0.45,0.45 0.45,1.181 0,1.631l-2.234,2.235l2.234,2.234c0.45,0.451 0.45,1.181 0,1.632c-0.45,0.45 -1.181,0.45 -1.631,0l-2.235,-2.235l-2.234,2.235c-0.45,0.45 -1.181,0.45 -1.631,0c-0.45,-0.451 -0.45,-1.181 0,-1.632l2.234,-2.234l-2.234,-2.235c-0.45,-0.45 -0.45,-1.181 0,-1.631c0.45,-0.45 1.181,-0.45 1.631,0l2.234,2.235Z"
          className="cross conditional newProps setState"
        />
        <g className="conditional newProps setState forceUpdate">
          <path
            d="M477.74,389.078c0,-3.158 -2.564,-5.722 -5.722,-5.722l-205.276,0c-3.158,0 -5.722,2.564 -5.722,5.722l0,50.458c0,3.158 2.564,5.722 5.722,5.722l205.276,0c3.158,0 5.722,-2.564 5.722,-5.722l0,-50.458Z"
            className="card"
          />
          <text x="327.498px" y="437.386px" className="params">
            (nextProps, nextState)
          </text>
          <text x="269.359px" y="437.386px" className="details">
            UNSAFE
          </text>
          <text x="296.033px" y="411.436px" className="lifecycle">
            componentWillUpdate
          </text>
        </g>
        <g className="conditional newProps setState forceUpdate">
          <path
            d="M370.35,448.088c0,-0.636 -0.516,-1.153 -1.153,-1.153c-0.637,0 -1.153,0.517 -1.153,1.153l0,21.319c0,0.637 0.516,1.154 1.153,1.154c0.637,0 1.153,-0.517 1.153,-1.154l0,-21.319Z"
            className="arrow"
          />
          <path
            d="M369.197,472.605l3.926,-3.926c0.45,-0.45 1.181,-0.45 1.631,0c0.45,0.45 0.45,1.181 0,1.631l-4.741,4.742c-0.226,0.225 -0.521,0.337 -0.816,0.337c-0.295,0 -0.591,-0.112 -0.816,-0.337l-4.741,-4.742c-0.45,-0.45 -0.45,-1.181 0,-1.631c0.45,-0.45 1.181,-0.45 1.631,0l3.926,3.926Z"
            className="arrow"
          />
        </g>
        <g className="conditional newProps setState forceUpdate">
          <path
            d="M477.498,482.446c0,-3.158 -2.564,-5.722 -5.722,-5.722l-205.276,0c-3.158,0 -5.722,2.564 -5.722,5.722l0,50.458c0,3.158 2.564,5.722 5.722,5.722l205.276,0c3.158,0 5.722,-2.564 5.722,-5.722l0,-50.458Z"
            className="card"
          />
          <text x="345.823px" y="504.804px" className="lifecycle">
            render
          </text>
        </g>
        <g className="conditional newProps setState forceUpdate">
          <path
            d="M370.35,541.448c0,-0.636 -0.516,-1.153 -1.153,-1.153c-0.637,0 -1.153,0.517 -1.153,1.153l0,21.319c0,0.637 0.516,1.154 1.153,1.154c0.637,0 1.153,-0.517 1.153,-1.154l0,-21.319Z"
            className="arrow"
          />
          <path
            d="M369.197,565.965l3.926,-3.926c0.45,-0.45 1.181,-0.45 1.631,0c0.45,0.45 0.45,1.181 0,1.631l-4.741,4.742c-0.226,0.225 -0.521,0.337 -0.816,0.337c-0.295,0 -0.591,-0.112 -0.816,-0.337l-4.741,-4.742c-0.45,-0.45 -0.45,-1.181 0,-1.631c0.45,-0.45 1.181,-0.45 1.631,0l3.926,3.926Z"
            className="arrow"
          />
        </g>
        <g className="conditional newProps setState forceUpdate">
          <path
            d="M477.557,575.806c0,-3.158 -2.564,-5.722 -5.722,-5.722l-205.276,0c-3.158,0 -5.722,2.564 -5.722,5.722l0,50.458c0,3.158 2.564,5.722 5.722,5.722l205.276,0c3.158,0 5.722,-2.564 5.722,-5.722l0,-50.458Z"
            className="card"
          />
          <text x="327.315px" y="624.114px" className="params">
            (prevProps, prevState)
          </text>
          <text x="280.456px" y="598.164px" className="lifecycle">
            getSnapshotBeforeUpdate
          </text>
        </g>
        <g className="conditional newProps setState forceUpdate">
          <path
            d="M370.35,647.134c0,-0.637 -0.516,-1.153 -1.153,-1.153c-0.637,0 -1.153,0.516 -1.153,1.153l0,8.975c0,0.637 0.516,1.154 1.153,1.154c0.637,0 1.153,-0.517 1.153,-1.154l0,-8.975Z"
            className="arrow"
          />
          <path
            d="M369.197,659.307l3.926,-3.926c0.45,-0.45 1.181,-0.45 1.631,0c0.45,0.45 0.45,1.181 0,1.631l-4.741,4.742c-0.226,0.225 -0.521,0.337 -0.816,0.337c-0.295,0 -0.591,-0.112 -0.816,-0.337l-4.741,-4.742c-0.45,-0.45 -0.45,-1.181 0,-1.631c0.45,-0.45 1.181,-0.45 1.631,0l3.926,3.926Z"
            className="arrow"
          />
        </g>
        <g className="conditional newProps setState forceUpdate annotation">
          <rect x="342.6" y="632.688" width="53.195" height="12.602" />
          <text x="342.733px" y="641.928px">
            snapshot
          </text>
        </g>
        <g className="conditional newProps setState forceUpdate">
          <path
            d="M477.557,669.226c0,-3.158 -2.564,-5.722 -5.722,-5.722l-205.276,0c-3.158,0 -5.722,2.564 -5.722,5.722l0,50.458c0,3.158 2.564,5.722 5.722,5.722l205.276,0c3.158,0 5.722,-2.564 5.722,-5.722l0,-50.458Z"
            className="card"
          />
          <g>
            <text x="271.315px" y="717.534px" className="params">
              (prevProps,prevState,
            </text>
            <text x="410.315px" y="717.534px" className="params" style={{ fill: "#ffc64c" }}>
              snapshot
            </text>
            <text x="463.315px" y="717.534px" className="params">
              )
            </text>
          </g>
          <text x="299.699px" y="691.584px" className="lifecycle">
            componentDidUpdate
          </text>
        </g>
      </g>
      <g id="Unmounting">
        <path
          d="M717.36,67.636c0,-3.158 -2.564,-5.722 -5.722,-5.722l-205.276,0c-3.158,0 -5.722,2.564 -5.722,5.722l0,50.458c0,3.158 2.564,5.722 5.722,5.722l205.276,0c3.158,0 5.722,-2.564 5.722,-5.722l0,-50.458Z"
          className="card"
        />
        <text x="531.805px" y="89.994px" className="lifecycle">
          componentWillUnmount
        </text>
      </g>
    </svg>
  );
};

export default Lifecycle;
