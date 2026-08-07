export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  blurb: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: "signature-kopi",
    name: "Signature Kopi",
    blurb: "Old-school beans, slow-dripped the JB kopitiam way.",
    items: [
      { name: "Kopi O", description: "Black coffee, sock-brewed, gula Melaka sweetness", price: "RM 4.50", tags: ["Local Favourite"] },
      { name: "Kopi C", description: "With evaporated milk, light and fragrant", price: "RM 5.00" },
      { name: "Kopi Peng", description: "Iced kopi, condensed milk, bold and cold", price: "RM 5.50", tags: ["Best Seller"] },
      { name: "White Coffee", description: "Ipoh-style roast, smooth and low-bitterness", price: "RM 6.00" },
    ],
  },
  {
    id: "espresso-bar",
    name: "Espresso Bar",
    blurb: "Third-wave beans, roasted in small batches nearby.",
    items: [
      { name: "Espresso", description: "Double shot, house blend", price: "RM 7.00" },
      { name: "Piccolo Latte", description: "Ristretto with steamed milk, short and strong", price: "RM 9.00" },
      { name: "Cappuccino", description: "Classic ratio, micro-foam finish", price: "RM 9.50" },
      { name: "Caramel Latte", description: "House caramel, oat milk available", price: "RM 11.00", tags: ["Popular"] },
    ],
  },
  {
    id: "non-coffee",
    name: "Non-Coffee",
    blurb: "For the table that still wants something warm.",
    items: [
      { name: "Teh Tarik", description: "Hand-pulled, frothy, just-right sweet", price: "RM 5.00" },
      { name: "Iced Chocolate", description: "Belgian cocoa, fresh milk", price: "RM 8.50" },
      { name: "Matcha Latte", description: "Ceremonial grade, lightly sweetened", price: "RM 10.00" },
      { name: "Fresh Lime Juice", description: "Calamansi lime, no syrup added", price: "RM 7.00", tags: ["Refreshing"] },
    ],
  },
  {
    id: "toast-bites",
    name: "Toast & Light Bites",
    blurb: "Charcoal-grilled toast and kopitiam classics.",
    items: [
      { name: "Kaya Butter Toast", description: "Charcoal-grilled, house-made kaya", price: "RM 6.00", tags: ["Best Seller"] },
      { name: "Half-Boiled Eggs (2pc)", description: "With dark soy sauce and white pepper", price: "RM 5.00" },
      { name: "Kopitiam Chicken Sandwich", description: "Grilled chicken, achar slaw, toasted bun", price: "RM 14.00" },
      { name: "Butter Sugar Toast", description: "Simple, warm, and buttery", price: "RM 5.50" },
    ],
  },
  {
    id: "local-specials",
    name: "Local Specials",
    blurb: "JB comfort food, made fresh to order.",
    items: [
      { name: "Nasi Lemak Set", description: "Sambal, anchovies, egg, cucumber, peanuts", price: "RM 16.00", tags: ["Signature"] },
      { name: "Curry Mee", description: "Rich coconut curry broth, tofu puff, cockles", price: "RM 15.00" },
      { name: "Mee Rebus", description: "Sweet potato gravy, egg, lime", price: "RM 14.00" },
      { name: "Roti Bakar Set", description: "Toast, half-boiled eggs, kopi — the full JB start", price: "RM 12.00", tags: ["Great for Sharing"] },
    ],
  },
];
