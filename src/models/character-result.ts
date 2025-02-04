import { Character } from "./character";
import { PaginationInfo } from "./pagination-info";

export interface CharacterResult {
    info:  PaginationInfo;
    results: Array<Character>; 
  }