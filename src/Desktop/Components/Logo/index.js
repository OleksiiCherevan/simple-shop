import { Component } from "react";

import "./style.scss";

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <svg
                    width="128"
                    height="128"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_150_358)">
                        <path
                            d="M106.216 89.4892C106.301 90.4831 105.525 91.3375 104.537 91.3375H23.3187C22.3337 91.3375 21.5589 90.4874 21.6401 89.4952L27.4605 18.4575C27.5329 17.575 28.2628 16.896 29.1395 16.896H98.4745C99.3488 16.896 100.078 17.5716 100.153 18.4515L106.216 89.4892Z"
                            fill="#1DCF65"
                        />
                        <path
                            d="M112.699 108.023C112.8 109.263 111.832 110.326 110.601 110.326H17.4655C16.2371 110.326 15.2693 109.268 15.3666 108.03L22.0528 22.9369C22.14 21.8302 23.0534 20.978 24.1517 20.978H103.636C104.732 20.978 105.644 21.8268 105.734 22.9301L112.699 108.023Z"
                            fill="url(#paint0_linear_150_358)"
                        />
                        <path
                            d="M62.1993 83.3412C50.0768 83.3412 40.2148 71.3775 40.2148 56.6719C40.2148 55.9061 40.8293 55.2849 41.5877 55.2849C42.3462 55.2849 42.9606 55.9057 42.9606 56.6719C42.9606 69.8479 51.5911 80.5672 62.1997 80.5672C72.8083 80.5672 81.4388 69.8479 81.4388 56.6719C81.4388 55.9061 82.0532 55.2849 82.8117 55.2849C83.5701 55.2849 84.1846 55.9057 84.1846 56.6719C84.1841 71.3775 74.3218 83.3412 62.1993 83.3412Z"
                            fill="white"
                        />
                        <path
                            d="M75.7321 56.3001C75.3809 56.3001 75.0297 56.1648 74.7614 55.8938C74.2254 55.3521 74.2254 54.474 74.7614 53.9323L81.8759 46.7445C82.1332 46.4845 82.4824 46.3381 82.8466 46.3381C83.2109 46.3381 83.56 46.4841 83.8173 46.7445L90.8623 53.8626C91.3984 54.4042 91.3984 55.2824 90.8623 55.824C90.3262 56.3652 89.457 56.3656 88.9209 55.824L82.8462 49.687L76.7028 55.8938C76.4346 56.1648 76.0834 56.3001 75.7321 56.3001Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <linearGradient
                            id="paint0_linear_150_358"
                            x1="93.2631"
                            y1="97.8215"
                            x2="35.9439"
                            y2="30.9092"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#52D67A" />
                            <stop offset="1" stopColor="#5AEE87" />
                        </linearGradient>
                        <clipPath id="clip0_150_358">
                            <rect
                                width="97.28"
                                height="94.208"
                                fill="white"
                                transform="translate(15.3599 16.896)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        );
    }
}

export default Logo;
