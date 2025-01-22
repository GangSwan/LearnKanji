export class IndexController {
    async getKanjiByLevel(level: string) {
        const data = await this.fetchKanjiData(level);
        return data;
    }

    private async fetchKanjiData(level: string) {
        const response = await fetch(`./data/${level}.json`);
        if (!response.ok) {
            throw new Error(`Failed to fetch data for level ${level}`);
        }
        return response.json();
    }
}