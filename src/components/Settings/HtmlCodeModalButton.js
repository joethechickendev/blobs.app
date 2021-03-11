import { useClipboard } from "@chakra-ui/hooks"
import { CopyIcon } from "@chakra-ui/icons"
import { Button, IconButton, Tooltip } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { dynamic } from "../../state"
import DownloadSVG from "../Common/DownloadSVG"
import Highlight from "../Common/Highlight"
import Modal from "../Common/Modal"
import { HtmlIcon } from "../icons"
import { formatCode } from "../../utilities"

const HtmlCodeModalButton = ({ seed, edges, growth, svgPath }) => {
  const ID = `${edges}-${growth}-${seed}`
  const [code, setCode] = useState(null)

  const { hasCopied, onCopy } = useClipboard(code)

  const Actions = () => {
    return (
      <>
        <DownloadSVG content={code} filename={`blob_${ID}.svg`} />
        <Button
          onClick={onCopy}
          leftIcon={<CopyIcon fontSize="18px" />}
          variant="heavy"
        >
          {hasCopied ? "Copied" : "Copy code"}
        </Button>
      </>
    )
  }

  const Content = () => {
    const svgEl = document.getElementById("blobSvg")
    const markup = svgEl ? formatCode(svgEl.outerHTML) : ""

    setCode(markup.replace(/^\s+|\s+$/g, ""))
    return <Highlight code={markup} lang={"markup"} />
  }

  return (
    <Modal
      title="Get the code"
      src={
        <Tooltip
          label="View SVG code"
          aria-label="View SVG code"
          hasArrow
          variant="default"
        >
          <IconButton variant="ghost">
            <HtmlIcon w={6} h={6} color="gray.400" />
          </IconButton>
        </Tooltip>
      }
      actions={<Actions />}
    >
      {() => <Content />}
    </Modal>
  )
}
export default dynamic(HtmlCodeModalButton, [
  "seed",
  "edges",
  "growth",
  "svgPath",
])
