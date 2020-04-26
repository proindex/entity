import { createUniqueId } from "./id";
import { trimSlug } from "./slug";

export function createOfferId(modelId: string, sellerId: string) {
  const model = trimSlug(modelId.split("_")[1].substr(0, 32));
  const seller = trimSlug(
    sellerId
      .replace(/\w+_/, "")
      .replace(/-[\w\d]+$/, "")
      .substr(0, 8)
  );
  const id = createUniqueId().slice(-8);
  return `${model}_${seller}-${id}`;
}
