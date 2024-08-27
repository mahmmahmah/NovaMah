import { apiOptions, matchesType } from "@/types";

const options: apiOptions = {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.API_TOKEN || "",
    "Content-Type": "application/json",
  },
};

interface TeamDetails {
  id: string;
  name: string;
  crest: string;
  // يمكنك إضافة المزيد من التفاصيل حسب الحاجة
}

export async function fetchTeamDetails(teamId: string): Promise<TeamDetails> {
  const response = await fetch(
    `https://api.football-data.org/v4/teams/${teamId}`,
    {
      headers: {
        "X-Auth-Token": process.env.API_TOKEN || "",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch team details");
  }

  const data = await response.json();
  return data;
}

export const getMatchesfootball = async () => {
  try {
    const matchData = await fetch(
      "https://api.football-data.org/v4/matches",
      options
    );
    if (!matchData.ok) {
      throw new Error(`Failed to fetch matches: ${matchData.statusText}`);
    }
    return await matchData.json();
  } catch (error) {
    console.error("Error fetching football matches:", error);
    throw error;
  }
};

// src/api/index.ts
export async function getMatchDetails(matchId: string) {
  const options = {
    method: "GET",
    headers: {
      "X-Auth-Token": process.env.API_TOKEN || "",
    },
  };

  try {
    const response = await fetch(
      `https://api.football-data.org/v4/matches/${matchId}`,
      options
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch match details:", error);
    return null;
  }
}

export const getMatchesfootballFinished = async () => {
  const todayDate = new Date();
  const getDateMonth = new Date(todayDate.getTime());
  getDateMonth.setDate(todayDate.getDate() - 1);
  const year = getDateMonth.getFullYear();
  const month = String(getDateMonth.getMonth() + 1).padStart(2, "0");
  const day = String(getDateMonth.getDate()).padStart(2, "0");

  const yesterday = [year, month, day].join("-");

  try {
    const matchData = await fetch(
      `https://api.football-data.org/v4/matches?date=${yesterday}`,
      options
    );
    if (!matchData.ok) {
      throw new Error(
        `Failed to fetch finished matches: ${matchData.statusText}`
      );
    }
    return await matchData.json();
  } catch (error) {
    console.error("Error fetching finished football matches:", error);
    throw error;
  }
};

export const getNewsInfo = async () => {
  try {
    const newsData = await fetch(
      `https://newsapi.org/v2/everything?apiKey=${process.env.API_TOKEN_NEWS}&q=soccer&pageSize=5`,
      { next: { revalidate: 20 } }
    );
    if (!newsData.ok) {
      throw new Error(`Failed to fetch news: ${newsData.statusText}`);
    }
    return await newsData.json();
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export const filterLeague = async (filterData: string) => {
  try {
    const getEnglishLeague = await getMatchesfootball();
    const filterPremierLeague: matchesType[] = getEnglishLeague?.matches;
    const getData = filterPremierLeague.filter(
      (item) => item.competition.name === filterData
    );
    return getData;
  } catch (error) {
    console.error("Error filtering league:", error);
    throw error;
  }
};
