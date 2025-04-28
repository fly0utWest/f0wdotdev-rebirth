import { PB_URL, PB_EMAIL, getSecret } from "astro:env/server";
import PocketBase from "pocketbase";

let adminPB: PocketBase | null = null;

const passwoordPB = getSecret("PB_PASSWORD");

export const getAdminPB = async () => {
  if (adminPB) return adminPB;
  const pb = new PocketBase(PB_URL);
  await pb.collection("_superusers").authWithPassword(PB_EMAIL, passwoordPB!);
  adminPB = pb;

  return pb;
};
