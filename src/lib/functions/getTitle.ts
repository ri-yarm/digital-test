import { formatDate } from "lib/functions/formatDate.ts";

export const getTitle = (date: string, contributions: number) => {
  console.log(date);
  return contributions === 0
    ? `No contributions\n${formatDate(date)}`
    : `${contributions} contributions\n${formatDate(date)}`;
};
