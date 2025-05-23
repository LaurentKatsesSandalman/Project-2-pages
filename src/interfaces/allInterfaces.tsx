//INTERFACES ET TYPES
export interface Country {
    location_id: number;
    image?: string;
    name: {
        common: string;
        official: string;
    };
    currencies: string;
    capital: string[];
    region: string;
    subregion: string;
    languages: string[];
    landlocked: boolean; // le pays est-il sans accès à la mer
    latlng: [number, number];
    demonyms: {
        // va servir pour les plats
        eng: {
            fem?: string;
            masc: string;
        };
        fra?: {
            fem: string;
            masc: string;
        };
    };
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    gini: number;
    flags: {
        png?: string;
        svg?: string;
        alt?: string;
    };
    coatOfArms: {
        png?: string;
        svg?: string;
    };
    capitalInfo: {
        latlng: [number, number];
    };
}

export type Countries = Country[];

export interface Weather {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    location_id: number;
    daily_units: {
        time: string;
        temperature_2m_mean: string; // C°
        temperature_2m_max: string;
        temperature_2m_min: string;
        rain_sum: string; //"mm",
        snowfall_sum: string; //"cm",
        precipitation_hours: string;
    };
    daily: {
        time: string[];
        temperature_2m_mean: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        rain_sum: number[];
        snowfall_sum: number[];
        precipitation_hours: number[];
    };
}

export type Weathers = Weather[];

export type WeatherCountry = Country & Weather;
export type WeathersCountries = WeatherCountry[];

export type Regions =
    | "none"
    | "Europe"
    | "Africa"
    | "Americas"
    | "Asia"
    | "Oceania";

export interface Filters {
    region: Regions;
    subregion: Subregion;
    languages: string[];
    meantempmin: number;
    meantempmax: number;
    landlockedshown: boolean
    search: string
}

export interface Meal {
    strMeal: string;
    strMealThumb: string;
}

export type Meals = Meal[];

export interface WeatherResult {
    meanTemp: number;
    minTemp: number;
    maxTemp: number;
}

export interface SubInRegion {
    region: Regions;
    subregions: Subregion[];
}


export type Subregion = "none" | "Northern Africa" | "Eastern Africa" | "Middle Africa" | "Southern Africa" | "Western Africa" | "Caribbean" | "Central America" | "South America" | "North America" | "Central Asia" | "Eastern Asia" | "South-Eastern Asia" | "Southern Asia" | "Western Asia" | "Eastern Europe" | "Northern Europe" | "Southern Europe" | "Western Europe" | "Australia and New Zealand" | "Melanesia" | "Micronesia" | "Polynesia"


export type LocationId = number;

export type MoD =  "both"|"memories"|"dreams"

export interface FavoriteListInterface {
    memories: LocationId[];
    dreams: LocationId[];
    memoriesOrDreams: MoD;
    region: Regions;
    subregion: Subregion;
    languages: string[];
    meantempmin: number;
    meantempmax: number;
    landlockedshown: boolean;
    search: string
}

export type ItemList = "search" | "favorite" | "none"
