export interface Material {
  id: string
  name: string
  description: string
  features: string[]
  color: string  // Tailwind-compatible bg color or hex
  image: string
}

export const materials: Material[] = [
  {
    id: 'matte-laminate',
    name: 'Matte Laminate',
    description: 'Smooth, understated finish that hides fingerprints and scratches. The most practical choice for busy Indian kitchens.',
    features: ['Anti-fingerprint', 'Scratch-resistant', 'Easy to clean', 'Budget-friendly'],
    color: '#B8B0A4',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
  {
    id: 'high-gloss',
    name: 'High Gloss',
    description: 'Mirror-like sheen that reflects light and makes spaces feel larger. A bold, contemporary statement.',
    features: ['Light-reflecting', 'Easy to wipe', 'Contemporary look', 'Space-enhancing'],
    color: '#E8E4DE',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  },
  {
    id: 'acrylic',
    name: 'Acrylic',
    description: 'Ultra-smooth, seamless finish with deep colour saturation. Premium feel with lasting vibrancy.',
    features: ['Seamless finish', 'UV-resistant', 'Deep colours', 'Premium feel'],
    color: '#D4CFC7',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
  },
  {
    id: 'membrane',
    name: 'Membrane (PVC)',
    description: 'Versatile finish that wraps seamlessly around profiles and grooves. Perfect for classic and shaker-style designs.',
    features: ['Profile-friendly', 'Moisture-resistant', 'Wide range of patterns', 'Affordable luxury'],
    color: '#C8C0B4',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    id: 'pu-paint',
    name: 'PU Paint',
    description: 'Factory-applied paint finish with a flawless, furniture-grade quality. Available in virtually any colour.',
    features: ['Custom colours', 'Furniture-grade', 'Durable', 'Repairable'],
    color: '#A89888',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80',
  },
  {
    id: 'veneer',
    name: 'Natural Veneer',
    description: 'Real wood grain with the stability of engineered panels. Brings warmth and natural beauty to your kitchen.',
    features: ['Real wood grain', 'Natural warmth', 'Unique patterns', 'Timeless appeal'],
    color: '#8A765F',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80',
  },
  {
    id: 'glass',
    name: 'Back-painted Glass',
    description: 'Sleek glass panels with colour applied to the back surface. Stunning for feature doors and wall units.',
    features: ['Hygienic', 'Modern aesthetic', 'Easy to clean', 'Reflective quality'],
    color: '#C4BEB4',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
]
