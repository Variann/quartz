// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
// @ts-ignore
import lightboxScript from "./scripts/lightbox.inline"
import lightboxStyle from "./styles/lightbox.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { concatenateResources } from "../util/resources"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-body">{children}</div>
}

Body.afterDOMLoaded = concatenateResources(clipboardScript, lightboxScript)
Body.css = concatenateResources(clipboardStyle, lightboxStyle)

export default (() => Body) satisfies QuartzComponentConstructor
