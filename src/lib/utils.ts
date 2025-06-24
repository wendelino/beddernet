import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import chalk from "chalk";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function LOG(q: string, type: "info" | "warn" | "error" | "success" = "info") {
  switch (type) {
    case "success":
      console.log(chalk.bgGreen.black("- SUCCESS -"), q);  
      break;
  
    case "error":
      console.log(chalk.bgRed.black("- ERROR -"), q);  
      break;
    case "warn":
      console.log(chalk.bgYellow.black("- WARN -"), q);  
      break;
  
    default:
      console.log(chalk.bgCyan.black("- INFO -"), q); 
      break;
  }
}

export const parseHighlightedText = (text: string) => {
  const regex = /\$(.+?)\$|([^\s]+)/g;
  const result: { text: string; highlight: boolean }[] = [];

  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match[1]) {
      // Highlighted Text
      result.push({ text: match[1], highlight: true });
    } else if (match[2]) {
      // Normal Text
      result.push({ text: match[2], highlight: false });
    }
  }

  return result;
}