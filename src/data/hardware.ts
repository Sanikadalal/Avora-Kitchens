export interface HardwareItem {
  id: string
  name: string
  description: string
  icon: string // Lucide icon name
}

export const hardwareItems: HardwareItem[] = [
  { id: 'soft-close', name: 'Soft-Close Drawers', description: 'Silent, cushioned closing on every drawer and door.', icon: 'Volume2' },
  { id: 'tall-units', name: 'Tall Units', description: 'Floor-to-ceiling storage that maximises vertical space.', icon: 'ArrowUpDown' },
  { id: 'corner-storage', name: 'Corner Solutions', description: 'Magic corners and carousels that eliminate dead space.', icon: 'CornerDownRight' },
  { id: 'cutlery', name: 'Cutlery Organisers', description: 'Precision-fit inserts for every utensil and tool.', icon: 'UtensilsCrossed' },
  { id: 'pantry', name: 'Pantry Units', description: 'Walk-in-style storage for dry goods and provisions.', icon: 'Warehouse' },
  { id: 'pull-out', name: 'Pull-Out Systems', description: 'Baskets, bottle racks and shelves that come to you.', icon: 'ArrowRight' },
  { id: 'magic-corner', name: 'Magic Corners', description: 'Clever mechanisms that bring corner contents to the front.', icon: 'Sparkles' },
  { id: 'appliance', name: 'Appliance Units', description: 'Dedicated housing for ovens, microwaves and dishwashers.', icon: 'Microwave' },
]
