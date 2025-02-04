class ApiService {
    private basePath: string;

    constructor() {
        this.basePath = 'https://rickandmortyapi.com/api';
    }

    async getCharacteres(name: string, pgNumber: number): Promise<any> {
        try {
            const response = await fetch(`${this.basePath}/character/?page=${pgNumber}&name=${name}`);
            return await response.json();
        } catch (error) {
            console.error("Error on GET:", error);
            throw error;
        }
    }

}

export const apiService = new ApiService();