import Image from "next/image";
import logo from "../../public/RV logo.png";

export const LoadAnimation = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-row items-center justify-center bg-white">
      <div className="flex w-1/2 flex-col items-center justify-center">
        <Image
          src={logo.src}
          width={1000}
          height={0}
          className="w-1/2 animate-ping"
          alt="Logo RV"
        />
        <div className="text-md text-center md:text-2xl">
          Cargando Revista ...
        </div>
      </div>
    </div>
  );
};
