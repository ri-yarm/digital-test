export const getTitle = (date: string, contributions: number) => {
  return contributions === 0
    ? `No contributions\n ${date}`
    : `${contributions} contributions\n ${date}`;
};
