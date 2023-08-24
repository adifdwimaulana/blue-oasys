import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/db/db.json";

export default function getAllProducts(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return res.status(200).json(db.master.products);
}
