class Board {
    private grid: string[][];
    private rows: number;
    private columns: number;

    constructor() {
        this.rows = 6;
        this.columns = 3;
        this.grid = [];
        for (let i = 0; i < this.rows; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.columns; j++) {
                this.grid[i][j] = '-';
            }
        }
    }
    reset() {
        
    }
    render() {
        let result = '';
        for (let i = 0; i < this.grid.length; i++) {
            result += this.grid[i].join(' ') + '\n';
        }
        return result;
    }
}