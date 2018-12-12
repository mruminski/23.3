import { schema } from "normalizr";

const note = new schema.Entity("notes");

// prettier-ignore
const lane = new schema.Entity("lanes", {
  notes: [note],
});

export const lanes = [lane];
