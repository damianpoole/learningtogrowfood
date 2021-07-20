import * as React from 'react'

const Sun = () => (
    <span className="hex-icon-sun absolute top-0 right-6 md:right-24">
        <svg viewBox="0 0 35 41">
            <path d="M19,1 Q21,0,23,1 L39,10 Q41.5,11,42,14 L42,36 Q41.5,39,39,40 L23,49 Q21,50,19,49 L3,40 Q0.5,39,0,36 L0,14 Q0.5,11,3,10 L19,1"></path>
            <circle cx="21" cy="25" r="8"></circle>
            <circle cx="21" cy="25" r="12">
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 21 25"
                    to="360 21 25"
                    dur="40s"
                    repeatCount="indefinite"
                ></animateTransform>
            </circle>
        </svg>
    </span>
)

export default Sun
