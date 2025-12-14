export interface Category {
  name: string;
  subcategories: string[] | null;
}

export const categories: Category[] = [
  {
    name: "Aluminium Handrails",
    subcategories: null
  },
  {
    name: "Aluminium Railing System",
    subcategories: ["Bracket Systems", "Bracket With Cover Systems", "Continuous Systems"]
  },
  {
    name: "Bracket",
    subcategories: null
  },
  {
    name: "Railing Spigot",
    subcategories: null
  },
  {
    name: "Accessories",
    subcategories: null
  }
];
