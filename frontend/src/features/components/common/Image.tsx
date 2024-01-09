interface Props {
  img_src: string;
  width: string;
  height: string;
}

export default function Image({ img_src, width, height }: Props) {
  return (
    <img
      src={img_src}
      style={{ transform: "translate(5%,-5%)" }}
      width={width}
      height={height}
    />
  );
}
