import { ulid } from "ulid";

/**
 * Creates a unique id.
 */
export function createUniqueId() {
  return ulid().toLowerCase();
}

export const MAX_ID_LENGTH = 40;
