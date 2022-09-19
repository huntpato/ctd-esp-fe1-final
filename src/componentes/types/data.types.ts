import Character from "./character.types";
import Pagination from "./pagination.types";

interface DataAPI {
    info: Pagination;
    results: Character[];
    // error: string;
}

export default DataAPI;