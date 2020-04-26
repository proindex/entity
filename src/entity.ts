import { createSlug } from "./slug";
import { MAX_ID_LENGTH } from "./id";

export enum EntityType {
  BRAND = "BRAND",
  CATEGORY = "CATEGORY",
  MODEL = "MODEL",
  PRODUCT = "PRODUCT",
  PROPERTY = "PROPERTY",
  UNIT = "UNIT",
  /**
   * Geographical region: Europe, Russia, India,
   * International, etc.
   */
  GREGION = "GREGION",
  WEBSITE = "WEBSITE"
}

/**
 * Create an entity id.
 * @param type Entity type
 * @param name Entity ascii name
 */
export function createEntityId(type: EntityType, name: string) {
  return `${type.toLowerCase()}_${createSlug(name)}`.substr(0, MAX_ID_LENGTH);
}
