import React from "react";
function BoxAlbum({ children }: {children: React.ReactNode}) {
    return (
        <div
            style={{
                width: 200,
                height: 24,
                lineHeight: 5,
                gap: '120px',
                marginTop: '-24px',
                marginLeft: '690px',
            }}
        >
            {children}
        </div>
    )
}

export default BoxAlbum;