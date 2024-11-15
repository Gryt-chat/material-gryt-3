export type Server = {
  id: string;
  name: string;
  image: string;
};

export const servers: Server[] = [
  {
    id: "1",
    name: "S1",
    image: "",
  },
  {
    id: "2",
    name: "S2",
    image: "",
  },
  {
    id: "3",
    name: "S3",
    image: "",
  },
  {
    id: "4",
    name: "S4",
    image: "",
  },
] as const;
