export interface Testimonial {
  id: string
  quote: string
  name: string
  location: string
  kitchenType: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'We finally have a kitchen that looks beautiful and actually works for the way we cook. Every drawer, every shelf — it all makes sense.',
    name: 'Priya & Rahul',
    location: 'Whitefield, Bengaluru',
    kitchenType: 'Island Kitchen',
  },
  {
    id: '2',
    quote: 'From the first meeting to the final walkthrough, the entire process was transparent and well-managed. Our kitchen was installed exactly on schedule.',
    name: 'Ananya Sharma',
    location: 'Indiranagar, Bengaluru',
    kitchenType: 'U-Shaped Kitchen',
  },
  {
    id: '3',
    quote: 'The storage solutions alone transformed how we use our kitchen. I can finally find everything without digging through cabinets. It\'s a completely different experience.',
    name: 'Karthik & Meera',
    location: 'HSR Layout, Bengaluru',
    kitchenType: 'Parallel Kitchen',
  },
]
