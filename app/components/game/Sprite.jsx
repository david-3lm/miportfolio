export default function Sprite({
  src,
  frameWidth,
  frameHeight,
  frames,
  fps = 8,
  scale = 20,
  row = 0,
}) {
  const w = frameWidth * scale;
  const h = frameHeight * scale;

  return (
    <div
      role="img"
      aria-label="Personaje"
      style={{
        width: w,
        height: h,
        backgroundImage: `url(${src})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: `${w * frames}px ${h}px`,  // alto explícito, no "auto"
        backgroundPositionY: -row * h,
        imageRendering: "pixelated",
        "--end": `${-w * frames}px`,
        animation: `sprite-run ${frames / fps}s steps(${frames}) infinite`,
      }}
    />
  );
}