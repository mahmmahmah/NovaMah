export type apiOptions = {
  next: any;
  headers: {
    "X-Auth-Token": string | any;
    "Content-Type": string | any;
  };
};

// src/types/index.ts

export interface Team {
  id: number;
  name: string;
}

export interface Score {
  home: number;
  away: number;
}

export interface Cards {
  yellow: number;
  red: number;
}

export type matchesArea = {
  id?: number;
  name: string;
};
export type matchesCompetition = {
  id?: number;
  name: string;
  emblem: string;
};

export type lineupType = {
  home: { name: string }[];
  away: { name: string }[];
};

export type matchesHomeTeam = {
  id?: number;
  name: string;
  crest: string;
};
export type matchesAwayTeam = {
  id?: number;
  name: string;
  crest: string;
};
export type scores = {
  fullTime: {
    home: number;
    away: number;
  };
  halfTime?: {
    home: number;
    away: number;
  };
};

// src/types.ts
export interface MatchDetails {
  id: string;
  homeTeam: {
    id: string;
    name: string;
  };
  awayTeam: {
    id: string;
    name: string;
  };
  status: string;
  date: string;
  // أضف التفاصيل الأخرى حسب الحاجة
}

export type matchesType = {
  area: matchesArea;
  competition: matchesCompetition;
  id: number;
  utcDate: string;
  status: string;
  matchday?: number;
  homeTeam?: matchesHomeTeam;
  awayTeam?: matchesAwayTeam;
  score?: scores;
  cards?: Cards;
  goalDetails?: any[];
  referees?: any[];
  substitutions?: any[];
  lineup?: lineupType;

  statistics?: any[];
  odds?: any[];
};

export type newsType = {
  title: string;
  url: string;
  urlToImage: string;
};
