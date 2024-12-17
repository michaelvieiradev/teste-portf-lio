export interface Project {
  id: number;
  image: string;
  title: string;
}

export const projects: Project[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=500",
    title: "Brand Identity"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=500",
    title: "Mobile App"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=500",
    title: "Packaging"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=500",
    title: "Logo Design"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=500",
    title: "Web Design"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=500",
    title: "Brand Strategy"
  }
];