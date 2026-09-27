export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Understand your space, needs and budget.',
  },
  {
    number: '02',
    title: 'Site Measurement',
    description: 'Measure the space and understand the layout.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create the kitchen concept and 3D design.',
  },
  {
    number: '04',
    title: 'Materials',
    description: 'Choose finishes, hardware and accessories.',
  },
  {
    number: '05',
    title: 'Manufacturing',
    description: 'Precision manufacturing of kitchen components.',
  },
  {
    number: '06',
    title: 'Installation',
    description: 'Professional installation at your home.',
  },
  {
    number: '07',
    title: 'Handover',
    description: 'Final inspection and handover.',
  },
]
