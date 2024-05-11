import Image from "next/image";
import objectModel from "./object-model.svg";

export default async function Page() {
  return (
    <div className=".mermaid">
      <Image
        src={objectModel}
        alt="A rough model of the objects used for per-game configuration."
      />
    </div>
  );
}
