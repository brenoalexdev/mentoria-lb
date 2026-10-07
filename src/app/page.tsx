import PrimeiraPage from '../components/sections/PrimeiraPage';
import Ideia from '../components/sections/Ideia';
import SobreMim from '../components/sections/SobreMim';
import MetodoLB from '../components/sections/MetodoLB';
import Venda from '../components/sections/Venda';
import Comparativo from '../components/sections/Comparativo'

export default function Home() {
  return (
    <main className="bg-black min-h-screen scroll-smooth">
      <PrimeiraPage />
      <Ideia />
      <SobreMim />
      <Comparativo/>
      <MetodoLB />
      <Venda />
     
    </main>
  );
}