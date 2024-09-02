import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { filterLeague } from "@/api";
import LeagueTable from "@/components/LeagueTable";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nova Matches",
  description: "Generated by create next app",
};

async function fetchLeagues() {
  try {
    const getLaLiga = await filterLeague("Primera Division");
    const getEnglishLeague = await filterLeague("Premier League");
    const getBundesliga = await filterLeague("Bundesliga");
    const getChampionship = await filterLeague("Championship");
    const getCopaLibertadores = await filterLeague("Copa Libertadores");
    const getLigue1 = await filterLeague("Ligue 1");
    const getPrimeiraLiga = await filterLeague("Primeira Liga");
    const getSerieA = await filterLeague("Serie A");
    const getBrasileiro = await filterLeague("Campeonato Brasileiro Série A");
    const getUEFAChampionsLeague = await filterLeague("UEFA Champions League");
    const getEuropeanChampionship = await filterLeague("European Championship");
    const getEredivisie = await filterLeague("Eredivisie");

    return {
      getLaLiga,
      getEnglishLeague,
      getBundesliga,
      getChampionship,
      getCopaLibertadores,
      getLigue1,
      getPrimeiraLiga,
      getSerieA,
      getBrasileiro,
      getUEFAChampionsLeague,
      getEuropeanChampionship,
      getEredivisie,
    };
  } catch (error) {
    console.error("Error fetching leagues:", error);
    return {
      getLaLiga: [],
      getEnglishLeague: [],
      getBundesliga: [],
      getChampionship: [],
      getCopaLibertadores: [],
      getLigue1: [],
      getPrimeiraLiga: [],
      getSerieA: [],
      getBrasileiro: [],
      getUEFAChampionsLeague: [],
      getEuropeanChampionship: [],
      getEredivisie: [],
    };
  }
}

const LeagueSection = ({ title, data }: { title: string; data: any[] }) => (
  <section className="mb-8">
    <h2 className="text-lg font-bold mb-2 text-center">{title}</h2>
    <div className="w-full max-w-sm mx-auto">
      {data.map((team) => (
        <div key={team.id} className="mb-4">
          <LeagueTable data={team} />
        </div>
      ))}
    </div>
  </section>
);

export default async function Dwris() {
  const {
    getLaLiga,
    getEnglishLeague,
    getBundesliga,
    getChampionship,
    getCopaLibertadores,
    getLigue1,
    getPrimeiraLiga,
    getSerieA,
    getBrasileiro,
    getUEFAChampionsLeague,
    getEuropeanChampionship,
    getEredivisie,
  } = await fetchLeagues();

  return (
    <div className="px-4 py-4">
      <section>
        <hr />
        <img src="/img/leagues/CL.png" alt="UEFA Champions League" width={50} />
        <LeagueSection
          title="دوري أبطال أوروبا"
          data={getUEFAChampionsLeague}
        />
        <hr />
        <img src="/img/leagues/ED.png" alt="Eredivisie" width={50} />
        <LeagueSection title="الدوري الهولندي" data={getEredivisie} />
        <hr />
        <img src="/img/leagues/ec.png" alt="European Championship" width={50} />
        <LeagueSection
          title="البطولة الأوروبية"
          data={getEuropeanChampionship}
        />
        <hr />
        <img
          src="/img/leagues/Design-sans-titre-19.webp.webp"
          alt="La Liga"
          width={50}
        />
        <LeagueSection title="الدوري الاسباني" data={getLaLiga} />
        <hr />
        <img
          src="/img/leagues/premier_league.webp"
          alt="Premier League"
          width={50}
        />
        <LeagueSection title="الدوري الممتاز" data={getEnglishLeague} />
        <hr />
        <img src="/img/leagues/bundesliga.webp" alt="Bundesliga" width={50} />
        <LeagueSection title="الدوري الألماني" data={getBundesliga} />
        <hr />
        <img
          src="/img/leagues/championship.webp"
          alt="Championship"
          width={50}
        />
        <LeagueSection title="بطولة" data={getChampionship} />
        <hr />
        <img
          src="/img/leagues/copa_libertadores.webp"
          alt="Copa Libertadores"
          width={50}
        />
        <LeagueSection title="كوبا ليبرتادوريس" data={getCopaLibertadores} />
        <hr />
        <img src="/img/leagues/ligue_1.webp" alt="Ligue 1" width={50} />
        <LeagueSection title="الدوري الفرنسي " data={getLigue1} />
        <hr />
        <img
          src="/img/leagues/liga_portugal.webp"
          alt="Primeira Liga"
          width={50}
        />
        <LeagueSection
          title="الدوري البرتغالي الممتاز"
          data={getPrimeiraLiga}
        />
        <hr />
        <img src="/img/leagues/serie_a.webp" alt="Serie A" width={50} />
        <LeagueSection title="الدوري الإيطالي" data={getSerieA} />
        <hr />
        <img
          src="/img/leagues/brazilian_serie_a.webp"
          alt="Campeonato Brasileiro"
          width={50}
        />
        <LeagueSection title="الدوري البرازيلي" data={getBrasileiro} />
        <hr />
      </section>
    </div>
  );
}
