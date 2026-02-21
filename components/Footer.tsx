export default function Footer() {
  return (
    <footer
      style={{
        background: 'transparent',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '28px 0',
      }}
    >
      <div
        className="porto-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '16px',
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
          }}
        >
          Krishna Mallick
        </span>
        <p
          style={{
            fontSize: '12px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.18)',
            letterSpacing: '0.05em',
          }}
        >
          &copy; {new Date().getFullYear()} Krishna Mallick. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
