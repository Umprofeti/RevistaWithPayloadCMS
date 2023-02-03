import { categoriaProps } from "@/types/types";

export const HeaderRevista = ({categoria}:categoriaProps) => {
  return (
    <div className=" bg-white">
      <div className="justify-center text-center">
        <h2 className="font-Lato text-3xl">RENDEZ-VOUS</h2>
        <span className="subtitle font-Karla ml-24">magazine</span>
      </div>
      <div className="Edition flex place-content-between items-stretch border-t-2 border-b-2 border-black px-2">
        <div className=" font-Lato ml-5 mt-1 mb-1 text-sm"> Diciembre 2022</div>
        <div className=" font-Lato ml-5 mt-1 mb-1 text-sm">
          Panamá y Latinoamérica
        </div>
      </div>
      <div className="border-b-7 border-black">
        <h3 className="font-Playfair mt-1 text-center text-4xl font-bold">
          {categoria}
        </h3>
      </div>
    </div>
  );
};
