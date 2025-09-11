const generateQRCode = async (data, size, color) => {
  // data = any
  // size = 200x200
  // color = 0-0-0 (rgb)
  const response = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}&color=${color}&format=png`
  );
  const blob = await response.blob();

  return blob; // QR Code in blob format
};

module.exports = {
  generateQRCode,
};
