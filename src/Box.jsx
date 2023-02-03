function Box({ children }: 8) {
    return (
        <div
            style={{
                display: 'block',
                lineHeight: 4,
                marginBottom: '10px',
                marginLeft: '55px',
                width: 1100,
            }}
        >
            {children}
        </div>
    )
}

export default Box;