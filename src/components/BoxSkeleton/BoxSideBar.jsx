import React from "react";
function BoxSideBar({ children }: {children: React.ReactNode}) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: 250,
                height: 150,
                lineHeight: 5,
                marginBottom: '30px',
                marginLeft: '1740px',
                marginTop: '-100px',
            }}
        >
            {children}
        </div>
    )
}

export default BoxSideBar;