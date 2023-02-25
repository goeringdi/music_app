import React from "react";

function BoxTrack({ children }: {children: React.ReactNode}) {
    return (
        <div
            style={{
                width: 220,
                height: 24,
                lineHeight: 5,
                marginRight: '150px',
                marginTop: '-34px',
                marginLeft: '180px',
            }}
        >
            {children}
        </div>
    )
}

export default BoxTrack;