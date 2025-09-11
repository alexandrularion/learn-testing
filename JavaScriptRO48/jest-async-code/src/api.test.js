const { generateQRCode } = require("./api");

describe("Generate QR Code functionality", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("should return a blob when API responds correctly", async () => {
    const mockBlob = new Blob(["qrdata"], { type: "image/png" });
    const mockResponse = {
      blob: jest.fn().mockResolvedValue(mockBlob),
    };

    fetch.mockResolvedValue(mockResponse);

    const blob = await generateQRCode(
      "https://google.com",
      "300x300",
      "50-50-50"
    );

    expect(fetch).toHaveBeenCalledWith(
      `https://api.qrserver.com/v1/create-qr-code/?data=https://google.com&size=300x300&color=50-50-50&format=png`
    );
    expect(blob).toBeInstanceOf(Blob);
    expect(await blob.text()).toBe("qrdata");
  });
  it("should throw an error if fetch fails", async () => {
    fetch.mockRejectedValue(new Error("Network error"));

    await expect(
      generateQRCode("https://google.com", "200x200", "0-0-0")
    ).rejects.toThrow("Network error");
  });
});
