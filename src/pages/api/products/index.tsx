import type { NextApiRequest, NextApiResponse } from "next";
import { Products } from "src/types/products";
import { products } from "src/data/products";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Products[]>
) {
  res.status(200).json(products);
}
