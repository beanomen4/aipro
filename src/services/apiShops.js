import supabase from "./supabase";

export async function getShop() {
  const { data, error } = await supabase.from("Shop").select("*");

  if (error) {
    console.error(error);
    throw new Error("Shop rows could not be loaded");
  }

  return data;
}
