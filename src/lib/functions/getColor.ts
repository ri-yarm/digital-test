import { Colors } from "lib/theme/colors.ts";

export const getColor = (count: number) => {
  if (count === 0) return Colors.ONE;
  else if (count >= 1 && count <= 9) return Colors.TWO;
  else if (count >= 10 && count <= 19) return Colors.THREE;
  else if (count >= 20 && count <= 29) return Colors.FOUR;
  else return Colors.FIVE;
};
