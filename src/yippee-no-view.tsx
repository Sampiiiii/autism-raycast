import { getPreferenceValues } from "@raycast/api";
import { Shoot } from "./common";

export default async function Command() {
  const { confettiSound } = getPreferenceValues();
  console.log(confettiSound)
  return Shoot({ playSound: confettiSound });
}