document.addEventListener("nav", () => {
  const overlay = document.createElement("div")
  overlay.id = "lightbox-overlay"
  document.body.appendChild(overlay)

  function closeLightbox() {
    overlay.classList.remove("active")
    overlay.innerHTML = ""
  }

  function openLightbox(src: string, alt: string) {
    const img = document.createElement("img")
    img.src = src
    img.alt = alt
    overlay.appendChild(img)
    overlay.classList.add("active")
  }

  function onOverlayClick(e: MouseEvent) {
    if (e.target === overlay) closeLightbox()
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") closeLightbox()
  }

  overlay.addEventListener("click", onOverlayClick)
  document.addEventListener("keydown", onKeyDown)

  const images = document.querySelectorAll<HTMLImageElement>("article img")
  for (const img of images) {
    img.classList.add("lightbox-trigger")
    function onClick() {
      openLightbox(img.src, img.alt)
    }
    img.addEventListener("click", onClick)
    window.addCleanup(() => img.removeEventListener("click", onClick))
  }

  window.addCleanup(() => {
    overlay.removeEventListener("click", onOverlayClick)
    document.removeEventListener("keydown", onKeyDown)
    overlay.remove()
  })
})
