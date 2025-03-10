import './index.css'
import Profile from './components/Profile'
import Card from './components/Card'

export default function App() {
  const born = "Castellón de la Plana, Spain";
  const description = "Frontend Developer";

  return (
    <>
      <div className="flex flex-wrap md:p-20 p-5 justify-center md:text-left min-h-screen gap-10">
        <aside className="md:basis-1/3">
          <div className="flex md:flex-col gap-5 items-center md:items-baseline">
          <div className="size-25 md:size-40 rounded-full flex items-center justify-center">
            < Profile />
          </div>
          <div>
            <h1 className="md:text-4xl text-2xl font-bold md:mt-10">Miguel Pitarch</h1>
            <p className="mt-3 flex gap-3"><span>🇪🇸</span>{born}</p>
            <p className="flex gap-3"><span>💻</span>{description}</p>
          </div>
          </div>
            <h2 className="font-semibold mt-10 text-2xl">Transformando ideas en experiencias alucinantes.</h2>
            <h3 className="font-semibold mt-10 text-1xl">¿Hablamos?</h3>
            <p>hola@miguelpitarch.comm</p>
        </aside>


        <section className="flex-1">
          <div className="flex flex-wrap gap-5">
          <Card 
            title="FireStation"
            description="Carta digital para una cafeteria healthy"
          />

          <Card 
            title="The Program"
            description="Portal de entrenamientos CrossFit"
          />
          </div>
        </section>
      </div>
    </>
  )
}
