import { QRCodeSVG } from "qrcode.react";

export default function QRCode() {
  return (
    <div className="my-3 md:my-0">
      <QRCodeSVG value="https://www.albionvuart.com/" size={55} />
    </div>
  );
}
