import { useEffect, useRef } from "react";
import SignaturePad from "signature_pad";
import { Button } from "@material-tailwind/react";

const DrawSignature = ({ onChange }) => {
  const canvasRef = useRef(null);
  const signaturePadRef = useRef(null);

  useEffect(() => {
    let ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvasRef.current.width = canvasRef.current.offsetWidth * ratio;
    canvasRef.current.height = canvasRef.current.offsetHeight * ratio;
    canvasRef.current.getContext("2d").scale(ratio, ratio);
    const signaturePad = new SignaturePad(canvasRef.current, {
      minWidth: 0.5,
      maxWidth: 2,
    });
    signaturePad.addEventListener("endStroke", () => {
      onChange(
        !signaturePad.isEmpty() ? signaturePad.toDataURL("image/png") : ""
      );
    });
    signaturePadRef.current = signaturePad;
  }, []);

  const clear = () => {
    signaturePadRef.current.clear();
  };

  return (
    <div
      className="wrapper"
      role="region"
      aria-labelledby="signature-pad-label"
    >
      <h2 id="signature-pad-label" className="sr-only">
        Signature Pad
      </h2>
      <canvas
        id="signaturepad"
        ref={canvasRef}
        aria-label="Signature Pad"
        role="img"
        tabIndex="0"
        aria-describedby="signature-pad-description"
      ></canvas>
      <p id="signature-pad-description" className="sr-only">
        Use the mouse or touch to draw your signature on the pad above.
      </p>
      <div className="content_action_btn">
        <Button
          variant="outlined"
          onClick={clear}
          className="mr-[5px] mt-2"
          aria-label="Clear signature"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default DrawSignature;
