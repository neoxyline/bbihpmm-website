import Card from "./Card";

export default function Layanan() {
  return (
    <>
      <div className="m-10">
        <div className="text-center text-black font-bold text-2xl">
          Layanan BBSPJIHPMM
        </div>
        <p className="text-center text-slate-500 m-5 mx-10">
          Kami menyediakan layanan yang berkualitas dan dijamin oleh
          lembaga-lembaga terkemuka dan diawasi oleh OJK. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Atque, placeat sed fugiat laborum
          magnam deserunt!
        </p>
        <div className="flex flex-wrap flex-row gap-4 m-5 p-5 justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
