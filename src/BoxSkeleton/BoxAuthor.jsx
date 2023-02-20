import React from "react";
function BoxAuthor({ children }: {children: React.ReactNode}) {
    return (
        <div
            style={{
                width: 250,
                height: 24,
                lineHeight: 5,
                marginTop: '-24px',
                marginLeft: '420px',
            }}
        >
            {children}
        </div>
    )
}

export default BoxAuthor;