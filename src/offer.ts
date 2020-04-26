import { createUniqueId } from "./id";
import { trimSlug } from "./slug";

export function createOfferId(modelId: string, sellerId: string) {
  const model = trimSlug(modelId.split("_")[1].substr(0, 22));
  const seller = trimSlug(
    sellerId.replace(/\w+_/, "").split(/_/g).slice(-1).join("-").substr(0, 8)
  );
  const id = createUniqueId().slice(-8);
  return `${model}_${seller}-${id}`;
}
