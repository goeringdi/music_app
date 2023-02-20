import React from "react";

function BoxTrack({ children }: {children: React.ReactNode}) {
    return (
        <div
            style={{
                width: 250,
                height: 24,
                lineHeight: 5,
                marginRight: '150px',
                marginTop: '-34px',
                marginLeft: '150px',
            }}
        >
            {children}
        </div>
    )
}

export default BoxTrack;