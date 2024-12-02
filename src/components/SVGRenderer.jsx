const SVGRenderer = ({ svgName, ariaLabel }) => {
  switch (svgName) {
    case "expungement":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 mb-[5px] mt-[20px] h-24 w-20 text-gray-900"
          data-name="Layer 1"
          viewBox="0 0 128 160"
          x="0px"
          y="0px"
          role="img"
          aria-label={ariaLabel || "Expungement icon"}
        >
          <path d="M17,110.0186V5.9814A2.01478,2.01478,0,0,1,19.043,4H88.957A2.01478,2.01478,0,0,1,91,5.9814V8h4V5.9814A6.0195,6.0195,0,0,0,88.957,0H19.043A6.01948,6.01948,0,0,0,13,5.9814V110.0186A6.01948,6.01948,0,0,0,19.043,116H21v-4H19.043A2.01478,2.01478,0,0,1,17,110.0186Z" />
          <path d="M90,32H42a2,2,0,0,0,0,4H90a2,2,0,0,0,0-4Z" />
          <path d="M90,40H42a2,2,0,0,0,0,4H90a2,2,0,0,0,0-4Z" />
          <path d="M90,48H42a2,2,0,0,0,0,4H90a2,2,0,0,0,0-4Z" />
          <path d="M90,56H42a2,2,0,0,0,0,4H90a2,2,0,0,0,0-4Z" />
          <path d="M92,66a2.0001,2.0001,0,0,0-2-2H42a2,2,0,0,0,0,4H90A2.0001,2.0001,0,0,0,92,66Z" />
          <path d="M80.14549,80H42a2,2,0,0,0,0,4H78.22559A20.83039,20.83039,0,0,1,80.14549,80Z" />
          <path d="M89.11429,72H42a2,2,0,0,0,0,4H83.33109A21.09355,21.09355,0,0,1,89.11429,72Z" />
          <path d="M98,74a17,17,0,1,0,17,17A17.019,17.019,0,0,0,98,74Zm0,30a13,13,0,1,1,13-13A13.015,13.015,0,0,1,98,104Z" />
          <path d="M103.41409,85.5859a1.99945,1.99945,0,0,0-2.8282,0L98,88.1719l-2.58591-2.586a1.99984,1.99984,0,0,0-2.8282,2.8282L95.17189,91l-2.586,2.5859a1.99984,1.99984,0,0,0,2.8282,2.8282L98,93.8281l2.58589,2.586a1.99984,1.99984,0,0,0,2.8282-2.8282L100.82809,91l2.586-2.5859A1.99945,1.99945,0,0,0,103.41409,85.5859Z" />
          <path d="M42,96a2,2,0,0,0,0,4H79.05569A20.71752,20.71752,0,0,1,77.627,96Z" />
          <path d="M77.23929,88H42a2,2,0,0,0,0,4H77.05079C77.03519,91.666,77.09769,88.9824,77.23929,88Z" />
          <path d="M42,104a2,2,0,0,0,0,4H85.72069a21.17063,21.17063,0,0,1-4.1816-4Z" />
          <path d="M103,122.0186A2.01478,2.01478,0,0,1,100.957,124H31.043A2.01478,2.01478,0,0,1,29,122.0186V17.9814A2.01478,2.01478,0,0,1,31.043,16h69.914A2.01478,2.01478,0,0,1,103,17.9814V70.627a20.7191,20.7191,0,0,1,4,1.4287V17.9814A6.0195,6.0195,0,0,0,100.957,12H31.043A6.01948,6.01948,0,0,0,25,17.9814V122.0186A6.01948,6.01948,0,0,0,31.043,128h69.914A6.0195,6.0195,0,0,0,107,122.0186V109.9443a20.71243,20.71243,0,0,1-4,1.4287Z" />
        </svg>
      );
    case "nameChange":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 mb-[5px] mt-[20px] h-24 w-20 text-gray-900"
          viewBox="0 0 64 80"
          x="0px"
          y="0px"
          role="img"
          aria-label={ariaLabel || "Name Change icon"}
        >
          <g data-name="Form">
            <path d="M10.334,28.627a1.5,1.5,0,0,1,1.5-1.5H34.35a1.5,1.5,0,0,1,0,3H11.834A1.5,1.5,0,0,1,10.334,28.627ZM26.35,35.694H11.834a1.5,1.5,0,0,0,0,3H26.35a1.5,1.5,0,0,0,0-3Zm-1,8.569H11.834a1.5,1.5,0,1,0,0,3H25.35a1.5,1.5,0,0,0,0-3ZM61.2,30.98l-8.71,8.71a1.491,1.491,0,0,1-1.06.44,1.526,1.526,0,0,1-1.06-.44,1.509,1.509,0,0,1,0-2.12l7.65-7.65-.95-.95-.15.14-11.9,11.9h0V55.53a1.5,1.5,0,0,1-1.5,1.5H3.859a1.5,1.5,0,0,1-1.5-1.5V19.39a1.493,1.493,0,0,1,.42-1.04L13.319,7.43a1.511,1.511,0,0,1,1.08-.46h29.12a1.5,1.5,0,0,1,1.5,1.5V24h0l3.4-3.39,2.03-2.04a4.672,4.672,0,0,1,6.6,0l1.91,1.91a4.687,4.687,0,0,1,.22,6.36l2.02,2.02A1.491,1.491,0,0,1,61.2,30.98ZM42.019,54.03V44.011L38.74,47.29a1.479,1.479,0,0,1-.81.42l-7.67,1.28a1.942,1.942,0,0,1-.24.02,1.458,1.458,0,0,1-1.06-.44,1.48,1.48,0,0,1-.42-1.31l1.28-7.66a1.479,1.479,0,0,1,.42-.81l1.6-1.6a.431.431,0,0,1,.11-.11L42.019,27V9.97H15.9v9.42a1.5,1.5,0,0,1-1.5,1.5H5.359V54.03ZM49.48,23.79l-4.86,4.85-.02.02-.05.06L35.073,38.2l2.869,2.868a1.5,1.5,0,0,1-2.121,2.122l-2.869-2.869-.252.252-.86,5.11,5.12-.85,5.493-5.493.006-.007.007-.006L53.74,28.05Z" />
          </g>
        </svg>
      );
    case "civilCase":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 mb-[5px] mt-[20px] h-24 w-20 text-gray-900"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 100 125"
          enableBackground="new 0 0 100 100"
          xmlSpace="preserve"
          role="img"
          aria-label={ariaLabel || "Civil Case icon"}
        >
          <switch>
            <foreignObject
              requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/"
              x="0"
              y="0"
              width="1"
              height="1"
            />
            <g i:extraneous="self">
              <g>
                <path d="M9,75.7c0-1.6,1.4-3,3-3h40.7l-7.5-6.3c-0.1-0.1-0.2-0.2-0.3-0.2H12c-1,0-2.1,0.2-3,0.5V16.9h46.3v29l6.5-7.8V13.6c0-1.8-1.5-3.2-3.3-3.2H5.8c-1.8,0-3.3,1.4-3.3,3.2v62c0,5.3,4.3,9.5,9.5,9.5h22.9v-0.5c0-2.5,1.2-4.7,3.1-6.1H12C10.4,78.6,9,77.3,9,75.7z" />
                <path d="M48.8,26.3c0-1.8-1.5-3.3-3.3-3.3H18.8c-1.8,0-3.3,1.5-3.3,3.3v14.3c0,1.8,1.5,3.3,3.3,3.3h26.8c1.8,0,3.3-1.5,3.3-3.3V26.3z M42.3,37.3H22.1v-7.7h20.2V37.3z" />
                <path d="M62.4,73.1c1.3,1.1,3.1,0.9,4.2-0.4l0.9-1.1c1.1-1.3,0.9-3.1-0.4-4.2L53.7,56.2c-1.3-1.1-3.1-0.9-4.2,0.4l-0.9,1.1c-1.1,1.3-0.9,3.1,0.4,4.2L62.4,73.1z" />
                <path d="M85.1,45.9c1.3,1.1,3.1,0.9,4.2-0.4l0.9-1.1c1.1-1.3,0.9-3.1-0.4-4.2L76.4,29c-1.3-1.1-3.1-0.9-4.2,0.4l-0.9,1.1c-1.1,1.3-0.9,3.1,0.4,4.2L85.1,45.9z" />
                <path d="M97.5,69.5c-0.2-1.4-0.9-2.8-2.1-3.6L78.3,53.2l3.9-4.7L69.6,38L56.6,53.6l12.6,10.5l3.9-4.7L88.6,74c1.1,1,2.5,1.5,3.9,1.4c0,0,0.1,0,0.1,0c1.4-0.1,2.7-0.8,3.6-1.9C97.2,72.4,97.6,70.9,97.5,69.5z" />
                <path d="M81,83.1h-4.1v-1.6c0-1.5-1.2-2.8-2.8-2.8H49.3c-1.5,0-2.8,1.2-2.8,2.8v1.6h-4.1c-0.9,0-1.6,0.7-1.6,1.6V88c0,0.9,0.7,1.6,1.6,1.6H81c0.9,0,1.6-0.7,1.6-1.6v-3.3C82.7,83.8,81.9,83.1,81,83.1z" />
              </g>
            </g>
          </switch>
        </svg>
      );
    case "criminalCase":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 mb-[5px] mt-[20px] h-24 w-20 text-gray-900"
          viewBox="0 0 512 640"
          x="0px"
          y="0px"
          role="img"
          aria-label={ariaLabel || "Criminal Case icon"}
        >
          <path d="M288,184a95.3,95.3,0,0,0-64.037,24.479A95.982,95.982,0,1,0,120,367.293V400a8,8,0,0,0,8,8h24v16a32.036,32.036,0,0,0,32,32h80a32.036,32.036,0,0,0,32-32V408h24a8,8,0,0,0,8-8V367.293A96.014,96.014,0,0,0,288,184Zm-36.989,65.438a48,48,0,1,1,.007,61.131,96.189,96.189,0,0,0-.007-61.131ZM130.91,354.546a79.984,79.984,0,1,1,58.18,0A8,8,0,0,0,184,362v30H136V362A8,8,0,0,0,130.91,354.546ZM216,432a8,8,0,1,1,8,8A8.009,8.009,0,0,1,216,432Zm64-8a16.019,16.019,0,0,1-16,16H246.624a24,24,0,1,0-45.248,0H184a16.019,16.019,0,0,1-16-16V408h24a8,8,0,0,0,8-8V367.293a95.6,95.6,0,0,0,24.03-15.745A96.983,96.983,0,0,0,248,367.287V400a8,8,0,0,0,8,8h24Zm73.725-98.379a79.918,79.918,0,0,1-36.635,28.925A8,8,0,0,0,312,362v30H264V362a8,8,0,0,0-5.09-7.452,80.517,80.517,0,0,1-23.9-14.629q2-2.507,3.848-5.159a96.23,96.23,0,0,0,5.147-8.287,63.994,63.994,0,1,0-.024-92.932,96.322,96.322,0,0,0-9.008-13.423,80,80,0,0,1,118.751,105.5Z" />
        </svg>
      );
    case "newForm":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 mb-[5px] mt-[20px] h-24 w-20 text-gray-900"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 48 60"
          enableBackground="new 0 0 48 48"
          xmlSpace="preserve"
          role="img"
          aria-label={ariaLabel || "New Form icon"}
        >
          <g>
            <g>
              <polygon
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="37.545,13.833 23.292,13.833 23.292,1"
              />
              <path
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M37.55,23.765v-9.932 H23.292V1.017H5.689C3.109,1.017,1,3.063,1,5.562v36.893C1,44.956,3.109,47,5.689,47h27.173c2.256,0,4.153-1.565,4.592-3.632"
              />
            </g>
            <ellipse
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              cx="36.917"
              cy="33.512"
              rx="10.083"
              ry="9.773"
            />
            <line
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              x1="32.938"
              y1="33.511"
              x2="40.897"
              y2="33.511"
            />
            <line
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              x1="36.917"
              y1="29.531"
              x2="36.917"
              y2="37.491"
            />
            <line
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              x1="8.683"
              y1="9.642"
              x2="17.858"
              y2="9.642"
            />
            <line
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              x1="8.683"
              y1="15.353"
              x2="17.858"
              y2="15.353"
            />
            <line
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              x1="8.683"
              y1="21.064"
              x2="29.351"
              y2="21.064"
            />
            <line
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              x1="8.683"
              y1="26.774"
              x2="23.818"
              y2="26.774"
            />
            <line
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              x1="8.683"
              y1="32.485"
              x2="22.88"
              y2="32.485"
            />
            <line
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              x1="8.683"
              y1="38.196"
              x2="23.818"
              y2="38.196"
            />
          </g>
        </svg>
      );
    case "continueForm":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 mb-[5px] mt-[20px] h-24 w-20 text-gray-900"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 90 112.5"
          enableBackground="new 0 0 90 90"
          xmlSpace="preserve"
          role="img"
          aria-label={ariaLabel || "Continue Form icon"}
        >
          <g>
            <path d="M51.82,60.441l-1.392,9.8l9.799-1.392l30.065-30.78c0,0-0.638-3.489-3.312-5.718c-2.675-2.228-5.779-2.674-5.779-2.674L51.82,60.441z" />
            <path d="M66,82H4V8h45v13.695C49,23.321,50.572,25,52.198,25H66v17.667l4-3.917V22.142L51.751,4H3.242C1.616,4,0,5.323,0,6.949v76.088C0,84.663,1.616,86,3.242,86h63.702C68.57,86,70,84.663,70,83.037V62.562l-4,4.354V82z M53,10.041l5.426,5.479L63.852,21H53V10.041z" />
          </g>
        </svg>
      );
    case "individual":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 mb-[5px] mt-[20px] h-24 w-20 text-gray-900"
          data-name="图层 1"
          viewBox="0 0 200 250"
          x="0px"
          y="0px"
          role="img"
          aria-label={ariaLabel || "Individual icon"}
        >
          <path d="M101.62,95.85C125,95.8,144,77.17,144,54.18S125,12.55,101.62,12.5,59.3,31.18,59.23,54.17C59.31,77.2,78.26,95.8,101.62,95.85Zm.24,78V135.56A20.78,20.78,0,0,1,122.8,115l29.7-.09a67.11,67.11,0,0,0-31.63-9.12s-19.64,0-19.64,0H82.38c-36.42,1-66.8,33.36-69.77,66.3-.4,5,.43,7,.43,7a12.41,12.41,0,0,0,11.87,8.35l77.11,0h3.9a27,27,0,0,1-4.06-13.63Zm72.69-44.67-42.65.14a14.37,14.37,0,0,0-14.4,14.33v26.67c0,7.89,6.43,17.19,14.4,17.19h41.21c7.94,0,14.39-5.51,14.39-15.17v-30c0-6.82-4.91-13.14-12.95-13.14ZM135.05,141h21.59a5.74,5.74,0,1,1,0,11.45H135.05a5.74,5.74,0,1,1,0-11.45ZM170,175.17H135.05a5.73,5.73,0,1,1,0-11.45H170a5.73,5.73,0,0,1,6,5.48,5.87,5.87,0,0,1-.81,3.19,5.73,5.73,0,0,1-5.17,2.78Z" />
        </svg>
      );
    case "organization":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 mb-[5px] mt-[20px] h-24 w-20 text-gray-900"
          version="1.1"
          viewBox="-5.0 -10.0 110.0 135.0"
          role="img"
          aria-label={ariaLabel || "Organization icon"}
        >
          <path
            d="m86.129 66.672c-0.68359-0.76562-1.6992-1.1484-2.8867-1.1484-1.2305 0-2.3594 0.41016-3.1367 1.2266-0.71094 0.74219-1.1523 1.8516-1.1523 3.3281 0 1.6445 0.5 3.1172 1.3125 4.1641 0.73828 0.95703 1.7344 1.5508 2.8086 1.5508s2.0703-0.59375 2.8086-1.5508c0.80859-1.0508 1.3125-2.5234 1.3125-4.1641 0-1.5273-0.39844-2.6602-1.0625-3.4023zm-14.984 26.875h3.2812v-2.668c0-0.69922 0.56641-1.2656 1.2656-1.2656 0.69922 0 1.2656 0.56641 1.2656 1.2656v2.668h12.23v-2.668c0-0.69922 0.56641-1.2656 1.2656-1.2656s1.2656 0.56641 1.2656 1.2656v2.668h3.2812v-6.332c0-1.7344-0.71094-3.3086-1.8516-4.4531-1.1445-1.1445-2.7188-1.8516-4.4531-1.8516h-11.242c-1.7344 0-3.3086 0.71094-4.4531 1.8516-1.1445 1.1445-1.8516 2.7188-1.8516 4.4531v6.332zm-18.086-26.875c-0.68359-0.76562-1.6992-1.1484-2.8867-1.1484-1.2305 0-2.3594 0.41016-3.1367 1.2266-0.71094 0.74219-1.1523 1.8516-1.1523 3.3281 0 1.6445 0.5 3.1172 1.3125 4.1641 0.73828 0.95703 1.7344 1.5508 2.8086 1.5508 1.0742 0 2.0703-0.59375 2.8086-1.5508 0.80859-1.0508 1.3125-2.5234 1.3125-4.1641 0-1.5273-0.39844-2.6602-1.0625-3.4023zm-14.984 26.875h3.2812v-2.668c0-0.69922 0.56641-1.2656 1.2656-1.2656s1.2656 0.56641 1.2656 1.2656v2.668h12.23v-2.668c0-0.69922 0.56641-1.2656 1.2656-1.2656 0.69922 0 1.2656 0.56641 1.2656 1.2656v2.668h3.2812v-6.332c0-1.7344-0.71094-3.3086-1.8516-4.4531-1.1445-1.1445-2.7188-1.8516-4.4531-1.8516h-11.242c-1.7344 0-3.3086 0.71094-4.4531 1.8516-1.1445 1.1445-1.8516 2.7188-1.8516 4.4531v6.332zm-18.09-26.875c-0.68359-0.76562-1.6992-1.1484-2.8867-1.1484-1.2305 0-2.3594 0.41016-3.1367 1.2266-0.71094 0.74219-1.1523 1.8516-1.1523 3.3281 0 1.6445 0.5 3.1172 1.3125 4.1641 0.73828 0.95703 1.7344 1.5508 2.8086 1.5508 1.0742 0 2.0703-0.59375 2.8086-1.5508 0.80859-1.0508 1.3125-2.5234 1.3125-4.1641 0-1.5273-0.39844-2.6602-1.0625-3.4023zm-14.984 26.875h3.2812v-2.668c0-0.69922 0.56641-1.2656 1.2656-1.2656s1.2656 0.56641 1.2656 1.2656v2.668h12.23v-2.668c0-0.69922 0.56641-1.2656 1.2656-1.2656 0.69922 0 1.2656 0.56641 1.2656 1.2656v2.668h3.2812v-6.332c0-1.7344-0.71094-3.3086-1.8516-4.4531-1.1445-1.1445-2.7188-1.8516-4.4531-1.8516h-11.242c-1.7344 0-3.3086 0.71094-4.4531 1.8516-1.1445 1.1445-1.8516 2.7188-1.8516 4.4531v6.332zm66.18-75.121-21.18-9.3281-42.109 18.543v5.7734h84.219v-5.7734l-20.93-9.2188zm-41.227 19.969zm-11.82-2.4492h11.82v2.4492s0.003906 0 0 0h-11.82zm37.777 2.4492zm-11.82-2.4492h11.82v2.4492s0.003906 0 0 0h-11.82zm37.777 2.4492zm-11.82-2.4492h11.82v2.4492s0.003906 0 0 0h-11.82zm-1.3086 46.477c0 0.69922-0.56641 1.2656-1.2656 1.2656-0.69922 0-1.2656-0.56641-1.2656-1.2656v-3.7031c0-0.69531 0.28516-1.3242 0.74219-1.7812l0.003906-0.003906-0.003906-0.003906c0.45703-0.45703 1.0898-0.74219 1.7852-0.74219h0.41016l1.5781-35.266h-0.67578c-0.69531 0-1.3281-0.28516-1.7852-0.74219-0.03125-0.03125-0.0625-0.0625-0.089844-0.097657-0.40625-0.44922-0.65234-1.043-0.65234-1.6914v-2.4492h-9.0781v2.4492c0 0.69531-0.28516 1.3281-0.74219 1.7852-0.45703 0.45703-1.0898 0.74219-1.7852 0.74219h-0.67578l0.85156 19.078c0.03125 0.69531-0.51172 1.2852-1.207 1.3125-0.69531 0.03125-1.2852-0.51172-1.3125-1.207l-0.85937-19.188h-5.418l-0.85938 19.188c-0.03125 0.69531-0.61719 1.2344-1.3125 1.207-0.69531-0.03125-1.2344-0.61719-1.207-1.3125l0.85156-19.078h-0.67578c-0.69531 0-1.3281-0.28516-1.7852-0.74219-0.03125-0.03125-0.0625-0.0625-0.089844-0.097656-0.40625-0.44922-0.65234-1.043-0.65234-1.6914v-2.4492h-9.0781v2.4492c0 0.69531-0.28516 1.3281-0.74219 1.7852-0.45703 0.45703-1.0898 0.74219-1.7852 0.74219h-0.67578l1.5781 35.266h0.41016c0.69531 0 1.3281 0.28516 1.7852 0.74219 0.03125 0.03125 0.0625 0.0625 0.089843 0.097656 0.40625 0.44922 0.65234 1.043 0.65234 1.6914v3.7031c0 0.69922-0.56641 1.2656-1.2656 1.2656s-1.2656-0.56641-1.2656-1.2656v-3.6992h-6.2266c-0.69922 0-1.2656-0.56641-1.2656-1.2656s0.56641-1.2656 1.2656-1.2656h3.293l-1.5781-35.266h-5.418l-0.85938 19.188c-0.03125 0.69531-0.61719 1.2344-1.3125 1.207-0.69531-0.03125-1.2344-0.61719-1.207-1.3125l0.85156-19.078h-0.67578c-0.69531 0-1.3281-0.28516-1.7852-0.74219-0.03125-0.03125-0.0625-0.0625-0.089844-0.097657-0.40625-0.44922-0.65234-1.043-0.65234-1.6914v-2.4492l-8.9805 0.007813c-0.69922 0-1.2656-0.56641-1.2656-1.2656v-7.8633c0-0.54297 0.33984-1.0039 0.82031-1.1836l43.312-19.078c0.33984-0.14844 0.70312-0.13672 1.0195 0l43.375 19.102c0.47266 0.20703 0.75391 0.67188 0.75391 1.1562v7.8633c0 0.69922-0.56641 1.2656-1.2656 1.2656h-8.9766v2.4492c0 0.69531-0.28516 1.3281-0.74219 1.7852-0.45703 0.45703-1.0898 0.74219-1.7852 0.74219h-0.67578l0.85156 19.078c0.03125 0.69531-0.51172 1.2852-1.207 1.3125-0.69531 0.03125-1.2852-0.51172-1.3125-1.207l-0.85938-19.188h-5.418l-1.5781 35.266h3.293c0.69922 0 1.2656 0.56641 1.2656 1.2656s-0.56641 1.2656-1.2656 1.2656h-6.2266z"
            fillRule="evenodd"
          />
        </svg>
      );
    case "lawyer":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 mb-[5px] mt-[20px] h-24 w-20 text-gray-900"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 72 90"
          enableBackground="new 0 0 72 72"
          xmlSpace="preserve"
          role="img"
          aria-label={ariaLabel || "Lawyer icon"}
        >
          <g>
            <g>
              <path d="M23.7915516,25.1438351c0.1333008-0.2333984,0.3554688-0.2587891,0.4448242-0.2587891c0.0888672,0,0.3110352,0.0253906,0.4443359,0.2587891c0.184082,0.3232422,0.5219727,0.5048828,0.8696289,0.5048828c0.1679688,0,0.3378906-0.0424805,0.4941406-0.1313477c0.4799805-0.2734375,0.6469727-0.8842773,0.3735352-1.3637695c-0.4526367-0.7944336-1.2680664-1.2685547-2.1816406-1.2685547c-0.9140625,0-1.7294922,0.4741211-2.1821289,1.2685547c-0.2734375,0.4794922-0.1064453,1.090332,0.3735352,1.3637695C22.906786,25.7898312,23.5186024,25.6233273,23.7915516,25.1438351z" />
              <path d="M32.124073,25.5173702c0.4790039,0.2724609,1.0908203,0.105957,1.3637695-0.3735352c0.1333008-0.2333984,0.3554688-0.2587891,0.4448242-0.2587891c0.0888672,0,0.3110352,0.0253906,0.4443359,0.2587891c0.184082,0.3232422,0.5219727,0.5048828,0.8696289,0.5048828c0.1679688,0,0.3378906-0.0424805,0.4941406-0.1313477c0.4799805-0.2734375,0.6469727-0.8842773,0.3735352-1.3637695c-0.4526367-0.7944336-1.2680664-1.2685547-2.1816406-1.2685547c-0.9140625,0-1.7294922,0.4741211-2.1821308,1.2685547C31.4770985,24.6330929,31.6440907,25.2439327,32.124073,25.5173702z" />
              <path d="M29.0840321,30.7688351c0.578125,0,1.1210938-0.2246094,1.5297852-0.6337891c0.3901367-0.390625,0.3901367-1.0234375-0.0004883-1.4140625c-0.390625-0.3901367-1.0239258-0.390625-1.4145508,0c-0.0541992,0.0546875-0.1757813,0.0537109-0.2290039,0c-0.390625-0.390625-1.0239258-0.3901367-1.4145508,0c-0.390625,0.390625-0.390625,1.0234375-0.0004883,1.4140625C27.9634266,30.5442257,28.5063953,30.7688351,29.0840321,30.7688351z" />
              <path d="M32.0479012,32.3230362c-0.7685566,0.8452148-1.821291,1.3100586-2.9638691,1.3100586c-1.1420898,0-2.1948242-0.4648438-2.9633789-1.3100586c-0.3710938-0.4077168-1.0039063-0.4389668-1.4125977-0.0664063c-0.4086914,0.371582-0.4384766,1.0043945-0.0668945,1.4125977c1.1357422,1.2480469,2.7553711,1.9638672,4.4428711,1.9638672c1.6879883,0,3.3076191-0.7158203,4.4433613-1.9638672c0.371582-0.4082031,0.3417969-1.0410156-0.0668945-1.4125977C33.052784,31.8840694,32.4194832,31.9148312,32.0479012,32.3230362z" />
              <path d="M66.2117157,60.2351456l-9.339962-7.4599609c0.0899658-0.1699219,0.1700439-0.3398438,0.25-0.5097656c1.7448196,1.0196953,3.797966,0.6404228,5.0699463-0.7099609c1.5400391-1.6401367,1.4599609-4.2299805-0.1799316-5.7700195l-6.6199951-6.2202148c-1.6051445-1.5237961-4.1894417-1.4940071-5.7700195,0.1699219c-1.3164024,1.4046707-1.4839363,3.5332031-0.4000244,5.1103516c-0.7099609,0.3696289-1.3599854,0.7895508-1.9599609,1.2597656c-0.4300537-0.2202148-0.8800049-0.409668-1.3400879-0.5600586c-0.1007919-0.0357513-9.9698067-3.5361633-9.3598633-3.3198242v-3.7202148c2.5898438-2.1298828,4.2999268-5.3398438,4.5100098-8.9799824c1.6499023-0.2797852,2.9199219-1.7099609,2.9199219-3.4399414c0-1.2998047-0.7299805-2.4296875-1.7800293-3.0297852c0.5800781-2.6098633,1.1500244-6.4702148,0.5-10c-0.75-4.0102539-3.7600098-7.300293-7.8399658-8.550293c-3.5499287-1.0800781-7.3599873-1.0800781-11.0000019-0.0200195c-0.0899658,0.0200195-8.5499268,2.25-8.6700439,11.1801758c0.0600586,1.6801758,0.25,4.9399414,0.8601074,7.3300781c-1.1101074,0.5898438-1.880127,1.75-1.880127,3.0898438c0,1.7202148,1.2600098,3.1601563,2.9000244,3.4301758c0.1307774,3.4983883,1.667654,6.8034801,4.7000732,9.1899433v3.4296875c-0.1007519,0.0526848-2.5271416,1.3214912-2.4100342,1.2602539l-7.0300293,2.1801758c-3.6999512,1.1499023-6.4200439,4.3701172-6.9200439,8.2197266L4.0817127,64.1052628c-0.2511184,1.9885101,1.2908564,3.75,3.2900391,3.75h43.4300537c2.013752,0,3.5607834-1.7702484,3.289917-3.75l-0.5899658-4.5600586l6.5400391,7.2299805c1.7346458,1.9622879,4.8366508,2.0836487,6.6799278,0.1098633C68.5620728,64.9390869,68.2730408,61.8384514,66.2117157,60.2351456z M7.3717518,65.8552628c-0.8032713,0-1.4131999-0.7059479-1.3099365-1.4897461L7.401659,54.0554581c0.4001465-3.0800781,2.5700684-5.6499023,5.5300293-6.5703125l4.3901367-1.3598633l-4.0500488,5.1801758c-0.1999512,0.2597656-0.2800293,0.5698242-0.2399902,0.8901367c0.0400391,0.3198242,0.2199707,0.5996094,0.4699707,0.7895508l3.3999023,2.4702148l-2.6899414,3.3198242c-0.3399658,0.4101563-0.3599854,1-0.0500488,1.4204102l4.0300293,5.659668H7.3717518z M19.0618153,29.0652218v-3.8999023c0.5599365-1.0600586,0.8798828-2.5698242,1.0599365-3.6801758c0.0899658-0.5395508,0.1600342-1.1699219,0.2299805-1.8696289c0.0400391-0.5102539,0.3099365-0.9804688,0.7299805-1.2802734c0.4200439-0.3100586,0.9300537-0.4199219,1.4801025-0.2998047c3.1499023,0.7197266,8.869873,1.9199219,14.2399921,1.6699219c0.4899902-0.0200195,0.9799805,0.7402344,0.9799805,0.7402344l1.3299561,5.0498047v3.25c0,5.6098652-4.1900635,10.1899433-9.5399189,10.4296894C23.7972279,39.4682846,19.0618153,34.8317451,19.0618153,29.0652218z M25.901659,65.8552628h-1.1298828l-2.4599609-16.6098633l2.5198975,2.5297852c0.1800537,0.1899414,0.4400635,0.300293,0.710083,0.300293h0.0499268c0.1700439-0.0102539,0.3299561-0.0800781,0.4700928-0.1699219l0.4499512,0.9897461L25.901659,65.8552628z M25.4517078,49.5652237l-3.6298828-3.659668l-0.170166-1.1303711l1.920166-1.3198242l4.1098633,3.25L25.4517078,49.5652237z M24.3018055,41.4851456c-0.0900879-0.0600586-0.1800537-0.1098633-0.2800293-0.1499023v-1.2700195c1.5599365,0.7299805,3.2700195,1.1303711,5.0500488,1.1303711c0.1899414,0,0.3999023-0.0102539,0.5998535-0.0205078c1.6600342-0.0698242,3.2299824-0.5097656,4.6501484-1.2099609v1.3300781c-0.1601563,0.0302734-0.3100586,0.0898438-0.4500732,0.1899414l-4.790041,3.7802734L24.3018055,41.4851456z M33.7117195,65.8552628h-1.2399902l-0.6300068-12.9599609l0.4200459-0.9101563c0.9810791,0.357151,0.9530106-0.2114716,3.9499512-3.1000977L33.7117195,65.8552628z M36.7117195,45.5452042l-3.9799805,4.0200195l-2.2500019-2.8598633l4.119997-3.25l2.2399902,1.1699219L36.7117195,45.5452042z M51.0817146,41.1052628c0.8141823-0.8568153,2.0951843-0.8694077,2.9400635-0.0898438l6.6199951,6.2299805c0.8399658,0.7900391,0.8800049,2.1098633,0.0899658,2.9399414c-0.7900391,0.8398438-2.1099854,0.8798828-2.9499512,0.1000977l-6.6201172-6.2299805C50.3560753,43.2892075,50.2608681,41.9912338,51.0817146,41.1052628z M45.3118172,47.4455948c0.1298828,0.0395508,0.25,0.0898438,0.369873,0.1396484c-0.6098633,0.6899414-1.1398926,1.4599609-1.5899658,2.2998047l-2.9300537-3.7695313L45.3118172,47.4455948z M40.0317879,52.8552628c0.3798828-0.409668,0.8999023-0.6401367,1.4599609-0.659668c0.5600586-0.0102539,1.0899658,0.1894531,1.4899902,0.5698242l6.6199951,6.2197266c0.8610916,0.8187866,0.8500366,2.1403236,0.0899658,2.9399414c-0.8263855,0.8693314-2.1497879,0.8609505-2.9499512,0.1000977l-6.6199951-6.2299805C39.2817879,55.015419,39.2517586,53.6853409,40.0317879,52.8552628z M50.8018074,65.8552628H40.2917976l3.0499268-4.2797852l2.0300293,1.909668c1.6174507,1.5119781,4.2204781,1.4855957,5.7700195-0.1899414c0.2999268-0.3100586,0.5198975-0.6601563,0.6999512-1.0400391c0.2952385,2.35112,0.2800293,2.1083603,0.2800293,2.2900391C52.1217537,65.2356186,51.5599976,65.8552628,50.8018074,65.8552628z M50.0817146,56.6853409l-4.8399658-4.5400391c1.0200195-2.6899414,2.8200684-4.6000977,5.4399414-5.7900391l4.8400879,4.550293C54.5017586,53.5954971,52.7117195,55.4953995,50.0817146,56.6853409z" />
            </g>
          </g>
        </svg>
      );
    case "staff":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 mb-[5px] mt-[20px] h-24 w-20 text-gray-900"
          version="1.1"
          viewBox="-5.0 -10.0 110.0 135.0"
          role="img"
          aria-label={ariaLabel || "Staff icon"}
        >
          <path d="m92.297 21.328h-19.43c-0.86328 0-1.5625 0.69922-1.5625 1.5625s0.69922 1.5625 1.5625 1.5625h19.43c2.2031 0.003906 3.9883 1.7891 3.9922 3.9922v53.008c-0.003906 2.207-1.7891 3.9922-3.9922 3.9922h-84.594c-2.2031 0-3.9883-1.7852-3.9922-3.9922v-53.008c0.003906-2.2031 1.7891-3.9883 3.9922-3.9922h35.711v0.64062c0 2.707 2.1953 4.8984 4.8984 4.9023h3.375c2.7031-0.003906 4.8984-2.1953 4.8984-4.9023v-0.64062h7.8125c0.86328 0 1.5625-0.69922 1.5625-1.5625s-0.69922-1.5625-1.5625-1.5625h-7.8125v-7.6562c0-2.707-2.1953-4.8984-4.8984-4.9023h-3.375c-2.7031 0.003907-4.8984 2.1953-4.8984 4.9023v7.6562h-35.711c-3.9297 0.003906-7.1133 3.1875-7.1172 7.1172v53.008c0.003906 3.9297 3.1875 7.1133 7.1172 7.1172h84.594c3.9297-0.003906 7.1133-3.1875 7.1172-7.1172v-53.008c-0.003906-3.9297-3.1875-7.1133-7.1172-7.1172zm-45.758-7.6562c0-0.98047 0.79297-1.7773 1.7734-1.7773h3.375c0.98047 0 1.7734 0.79688 1.7734 1.7773v11.426c0 0.98047-0.79297 1.7773-1.7734 1.7773h-3.375c-0.98047 0-1.7734-0.79688-1.7734-1.7773z" />
          <path d="m40.148 35.441c0-1.7031-1.3828-3.0859-3.0859-3.0898h-24.906c-1.7031 0.003907-3.0859 1.3867-3.0859 3.0898v30.184c0 1.7031 1.3828 3.0859 3.0859 3.0859h24.906c1.7031 0 3.0859-1.3828 3.0859-3.0859zm-3.125 0.039063v22.637c-1.7266-2.2031-4.0469-3.8672-6.6875-4.7969 2.6758-2.3789 3.6055-6.1602 2.332-9.5078-1.2695-3.3477-4.4805-5.5586-8.0586-5.5586s-6.7891 2.2109-8.0586 5.5586c-1.2734 3.3477-0.34375 7.1289 2.332 9.5078-2.6406 0.92969-4.9609 2.5938-6.6875 4.7969v-22.641zm-12.414 16.895c-2.2227 0-4.2266-1.3359-5.0781-3.3906-0.85156-2.0508-0.38281-4.4141 1.1914-5.9883 1.5703-1.5703 3.9336-2.043 5.9844-1.1953 2.0547 0.84766 3.3945 2.8516 3.3984 5.0742 0 3.0352-2.4609 5.5-5.4961 5.5zm0.89844 3.25c5.7578 0.007812 10.625 4.2617 11.414 9.9609h-24.617c0.78516-5.6992 5.6562-9.9531 11.414-9.9609z" />
        </svg>
      );
    default:
      return () => null; // Return null for any unrecognized svgName
  }
};

export default SVGRenderer; // Export the SVGRenderer component
