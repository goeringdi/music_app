import React from "react";
function BoxImg({ children }: {children: React.ReactNode}) {
    return (
        <div
            style={{
                display: 'block',
                lineHeight: 5,
                rowGap: '12px',
                marginTop: '62x',
                marginLeft: '108px',
                width: 51,
                height: 51,
            }}
        >
            {children}
        </div>
    )
}

export default BoxImg;