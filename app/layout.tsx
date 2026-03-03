import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "2 Infinity & Beyond",
  description: "Interactive WebGL planet renderer with atmospheric scattering, terrain, oceans, and ring system.",
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: "hidden", background: "#000" }}>
        {children}
      </body>
    </html>
  )
}
