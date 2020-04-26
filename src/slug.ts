import slugify from "slugify";

/**
 * Creates a slug from a name.
 * @param name Input name/title/text
 * @param maxLength Max slug lenght. Default to 50.
 */
export function createSlug(name: string, maxLength: number = 50) {
  let slug = slugify(name.trim().toLowerCase()).replace(/[^a-z0-9]+/g, "-");
  slug = maxLength ? slug.substr(0, maxLength) : slug;

  return slug.replace(/-+$/g, "").replace(/^-+/g, "");
}
