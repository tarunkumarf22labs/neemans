

function Playbutton() {
    return (
      <svg
        width="90"
        height="90"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60 114.546c30.125 0 54.546-24.421 54.546-54.546S90.125 5.455 60 5.455 5.455 29.875 5.455 60 29.875 114.546 60 114.546Z"
          fill="#090A0B99"
        ></path>
        <path
          d="M60 5.455a54.546 54.546 0 0 1 47.236 27.272"
          stroke="url(#player-button-s)"
          stroke-width="5.986"
        ></path>
        <path
          d="M107.236 32.727a54.54 54.54 0 0 1 0 54.546"
          stroke="url(#player-button-b)"
          stroke-width="5.986"
        ></path>
        <path
          d="M107.236 87.273A54.548 54.548 0 0 1 60 114.546"
          stroke="url(#player-button-c)"
          stroke-width="5.986"
        ></path>
        <path
          d="M60 114.546a54.55 54.55 0 0 1-47.236-27.273"
          stroke="url(#player-button-d)"
          stroke-width="5.986"
        ></path>
        <path
          d="M12.764 87.273a54.545 54.545 0 0 1 0-54.545"
          stroke="url(#player-button-e)"
          stroke-width="5.986"
        ></path>
        <path
          d="M12.764 32.727A54.546 54.546 0 0 1 60 5.455"
          stroke="url(#player-button-f)"
          stroke-width="5.986"
        ></path>
        <path
          d="M50.387 85.167c-3.142 0-5.387-2.47-5.387-5.387V40.275C45 37.469 47.245 35 50.387 35c.898 0 1.908.224 2.806.786l32.322 19.752c1.571.898 2.581 2.694 2.581 4.49 0 1.907-1.01 3.703-2.581 4.6L53.193 84.382a5.33 5.33 0 0 1-2.806.786Z"
          fill="#fff"
        ></path>
        <defs>
          <linearGradient
            id="player-button-s"
            x1="60"
            y1="5.455"
            x2="83.619"
            y2="46.363"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#198DEE"></stop>
            <stop offset="0.5" stop-color="#2A3CEF"></stop>
          </linearGradient>
          <linearGradient
            id="player-button-b"
            x1="107.236"
            y1="32.727"
            x2="107.236"
            y2="87.273"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2A3CEF"></stop>
            <stop offset="0.7" stop-color="#E124D9"></stop>
          </linearGradient>
          <linearGradient
            id="player-button-c"
            x1="107.236"
            y1="87.273"
            x2="83.617"
            y2="128.181"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#E124D9"></stop>
            <stop offset="1" stop-color="#E52E56"></stop>
          </linearGradient>
          <linearGradient
            id="player-button-d"
            x1="60"
            y1="114.546"
            x2="36.381"
            y2="73.637"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.2" stop-color="#FFB400"></stop>
            <stop offset="1" stop-color="#C4FF29"></stop>
          </linearGradient>
          <linearGradient
            id="player-button-e"
            x1="5.456"
            y1="87.273"
            x2="5.456"
            y2="32.727"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.1" stop-color="#C4FF29"></stop>
            <stop offset="1" stop-color="#198DEE"></stop>
          </linearGradient>
          <linearGradient
            id="player-button-f"
            x1="12.764"
            y1="32.727"
            x2="36.383"
            y2="-8.181"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#198DEE"></stop>
            <stop offset="1" stop-color="#198DEE"></stop>
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
   function Smallplay() {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="10" fill="black" />
        <g clip-path="url(#clip0_628_36)">
          <path
            d="M13.5383 8.32041L9.56417 5.40625C9.25376 5.17895 8.88648 5.04204 8.50303 5.01071C8.11958 4.97937 7.73494 5.05483 7.39175 5.22871C7.04855 5.40259 6.76021 5.66811 6.55869 5.99583C6.35716 6.32356 6.25032 6.70069 6.25 7.08541V12.9167C6.2494 13.3018 6.35569 13.6795 6.55702 14.0078C6.75836 14.3361 7.04685 14.602 7.39037 14.7761C7.7339 14.9501 8.11899 15.0254 8.50278 14.9936C8.88657 14.9618 9.254 14.8241 9.56417 14.5958L13.5383 11.6817C13.802 11.4881 14.0165 11.2353 14.1643 10.9435C14.3121 10.6517 14.3891 10.3292 14.3891 10.0021C14.3891 9.67499 14.3121 9.3525 14.1643 9.0607C14.0165 8.76891 13.802 8.51602 13.5383 8.3225V8.32041Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_628_36">
            <rect
              width="10"
              height="10"
              fill="white"
              transform="translate(5 5)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  
  function Muteicon(props : any){
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Z" {...props} ></path></svg>
    )
  }
  function UnMuteicon(props : any){
    return(
      
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M184,152V104a8,8,0,0,1,16,0v48a8,8,0,0,1-16,0Zm40-72a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,224,80ZM213.92,210.62a8,8,0,1,1-11.84,10.76L160,175.09V224a8,8,0,0,1-12.91,6.31L77.25,176H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H73.55L42.08,45.38A8,8,0,1,1,53.92,34.62ZM144,157.49,88.1,96H32v64H80a7.94,7.94,0,0,1,4.91,1.69L144,207.64ZM117.06,69.31l26.94-21v58.47a8,8,0,0,0,16,0V32a8,8,0,0,0-12.91-6.31l-39.85,31a8,8,0,0,0,9.82,12.63Z"></path></svg>
    )
  }
  
  function Crossicon(props : any) {
    return(
      
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
    )
  }
  
  export {
    Playbutton,
    Smallplay,
    Muteicon,
    UnMuteicon,
    Crossicon
  };
  