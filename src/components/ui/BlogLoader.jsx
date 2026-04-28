import React from 'react'

/**
 * BlogLoader
 * ──────────
 * Matches the attached reference: a plain circular spinner with a "Loading" label.
 *
 * Props:
 *   label  {string}  – text shown below the spinner   (default: "Loading")
 *   inline {bool}    – use relative positioning instead of fixed full-page overlay
 */
export default function BlogLoader({ label = 'Loading', inline = false }) {
  const wrapper = inline
    ? 'flex flex-col items-center justify-center py-24 w-full'
    : 'fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white'

  return (
    <div className={wrapper} role="status" aria-label={label}>
      {/* Circular spinner */}
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: '50%',
          border: '3px solid #e0e0e0',       /* light grey full ring */
          borderTopColor: '#6b6b6b',          /* dark grey arc        */
          animation: 'blog-spin 0.9s linear infinite',
        }}
      />

      {/* Label */}
      <p
        style={{
          marginTop: 20,
          fontSize: 15,
          fontWeight: 200,
          color: '#1a1a1a',
          letterSpacing: '0.01em',
          fontFamily: 'inherit',
        }}
      >
        {label}
      </p>

      <style>{`
        @keyframes blog-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
