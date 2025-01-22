export interface Kanji {
    character: string;
    readings: string[];
    meanings: string[];
}

export interface KanjiLevel {
    level: string;
    kanji: Kanji[];
}