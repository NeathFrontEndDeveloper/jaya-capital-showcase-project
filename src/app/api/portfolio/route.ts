import { NextResponse } from "next/server";


// Mock data (static JSON)
const portfolios = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    description: "A sleek and functional modern kitchen with updated cabinets, countertops, and lighting for a clean and stylish look.",
    image_before_after: "/images/b-a1.jpg",
  },
  {
    id: 2,
    title: "Cozy Bedroom Makeover",
    description: "A warm and inviting bedroom transformation featuring soft lighting, wooden finishes, and comfortable decor.",
    image_before_after: "/images/b-a2.jpg",
  },
  {
    id: 3,
    title: "Bathroom Upgrade",
    description: "A luxurious bathroom renovation with a new bathtub, modern tiles, and elegant lighting fixtures.",
    image_before_after: "/images/b-a3.jpg",
  },
  {
    id: 4,
    title: "Modern Living Room Design",
    description: "An open-concept living room featuring contemporary furniture, bright accents, and improved natural lighting.",
    image_before_after: "/images/b-a4.jpg",
  },
];


// GET all portfolios
export async function GET() {
  return NextResponse.json({ data: portfolios });
}
