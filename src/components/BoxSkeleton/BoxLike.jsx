import React from "react";
function BoxLike({ children }: {children: React.ReactNode}) {
    return (
        <div
            style={{
                display: 'block',
                lineHeight: 5,
                marginTop: '-24px',
                marginLeft: '940px',
                width: 14,
                height: 12,
            }}
        >
            {children}
        </div>
    )
}

export default BoxLike;