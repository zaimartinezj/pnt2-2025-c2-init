import Image from "next/image";
import User from "./User";

export default function Home() {
  return (
    <div>
      <h1> Esta es mi pagina Home</h1>
      <User nombre="Pablo" edad="45" />
      <br />
      <User nombre="Anna" edad="34" />
      <br />
      <User nombre="Juana" edad="45" />
      <br />
      <User nombre="Pedro" edad="54" />
    </div>
  );
}
