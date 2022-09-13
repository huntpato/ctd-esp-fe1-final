import Character from "./character.types";
import Pagination from "./pagination.types";

interface DataApi {
    info: Pagination;
    results: Character[];
    // error: string;
}

export default DataApi;