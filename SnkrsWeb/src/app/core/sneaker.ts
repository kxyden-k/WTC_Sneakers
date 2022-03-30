import {Media} from "./media";

export interface Sneaker {
  id: string;
  brand: string;
  colorway: string;
  gender: string;
  name: string;
  releaseDate: string;
  retailPrice: number;
  shoe: string;
  styleId: string;
  title: string;
  year: number;
  media: Media;
}
