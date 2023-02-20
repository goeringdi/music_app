import React from "react";
function BoxTime({ children }: {children: React.ReactNode}) {
    return (
        <div
            style={{
                display: 'block',
                lineHeight: 5,
                marginTop: '-16px',
                marginLeft: '1000px',
                width: 29,
                height: 24,
            }}
        >
            {children}
        </div>
    )
}

export default BoxTime;