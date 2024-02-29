import { formatDate } from "lib/functions/formatDate.ts";

export const getTitle = (date: string, contributions: number) => {
  return contributions === 0
    ? `No contributions\n${formatDate(date)}`
    : `${contributions} contributions\n${formatDate(date)}`;
};
