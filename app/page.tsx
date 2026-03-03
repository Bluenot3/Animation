export default function Page() {
  return (
    <iframe
      src="/planet.html"
      title="2 Infinity and Beyond - Planet Renderer"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
      allowFullScreen
    />
  )
}
