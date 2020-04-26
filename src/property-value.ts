import { createSlug } from "./slug";
import { MAX_ID_LENGTH } from "./id";

export type DataValue = {
  type: "ENTITY" | string;
  stringValue: string;
  unitCodeId?: string;
  valueReference?: DataValue;
};

function createDataValueId(value: DataValue) {
  if (value.type === "ENTITY") return value.stringValue.split("_")[1];
  let id = value.stringValue;

  if (value.unitCodeId) {
    id += value.unitCodeId.replace(/^unit_/, "");
  }
  if (value.valueReference) id += " " + createDataValueId(value.valueReference);

  return createSlug(id);
}

/**
 * Create a property value id.
 * @param propertyId Property id: property_some-value
 * @param value Value
 */
export function createPropertyValueId(propertyId: string, value: DataValue) {
  const end = createDataValueId(value);
  return `${propertyId.replace(/^property_/, "")}_${end}`
    .toLowerCase()
    .trim()
    .substr(0, MAX_ID_LENGTH);
}
