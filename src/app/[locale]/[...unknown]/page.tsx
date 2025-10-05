import { notFound } from "next/navigation";

const CatchAllUnknownPages = () => {
  notFound();
};

export default CatchAllUnknownPages;
