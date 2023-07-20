import { Mask } from "../store/mask";
import { CN_MASKS } from "./cn";
import { EN_MASKS } from "./en";

import { type BuiltinMask } from "./typing";
import { WE_MASKS } from "./we";
export { type BuiltinMask } from "./typing";

export const BUILTIN_MASK_ID = 100000;

export const BUILTIN_MASK_STORE = {
  buildinId: BUILTIN_MASK_ID,
  masks: {} as Record<string, BuiltinMask>,
  get(id?: string) {
    if (!id) return undefined;
    return this.masks[id] as Mask | undefined;
  },
  add(m: BuiltinMask) {
    const mask = { id: this.buildinId++, ...m };
    this.masks[mask.id] = mask;
    return mask;
  },
};

export const BUILTIN_MASKS: BuiltinMask[] = [
  ...CN_MASKS,
  ...EN_MASKS,
  ...WE_MASKS,
].map((m) => BUILTIN_MASK_STORE.add(m));
