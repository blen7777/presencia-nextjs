/**
 * Client testimonials config.
 * Set `enabled: true` and fill in the content to show a testimonial on the site.
 * The section is hidden entirely when no testimonials are enabled.
 */

export type TestimonialConfig = {
  enabled: boolean;
  name: { en: string; es: string };
  role: { en: string; es: string };
  quote: { en: string; es: string };
};

export const testimonials: TestimonialConfig[] = [
  {
    enabled: false,
    name: { en: 'C.R.', es: 'C.R.' },
    role: {
      en: 'CEO, Retail Startup, United States',
      es: 'CEO, Startup de Retail, Estados Unidos',
    },
    quote: {
      en: 'The team are excellent PHP and Laravel developers with sharp technical minds and fantastic attitudes. Their insightful technical observations during scoping help streamline projects and ensure top-quality results.',
      es: 'El equipo son excelentes desarrolladores PHP y Laravel con mentes técnicas agudas y actitudes fantásticas. Sus observaciones técnicas durante la etapa de análisis ayudan a agilizar proyectos y asegurar resultados de alta calidad.',
    },
  },
  {
    enabled: false,
    name: { en: 'C.R.', es: 'C.R.' },
    role: {
      en: 'CTO, E-Commerce Company',
      es: 'CTO, Empresa de E-Commerce',
    },
    quote: {
      en: 'Highly experienced across many areas of software development, and most importantly, cooperative and proactive. Delivered on time and consistently asked the right questions to clarify requirements throughout the project.',
      es: 'Altamente experimentados en muchas áreas del desarrollo de software y, lo más importante, cooperativos y proactivos. Entregaron a tiempo y consistentemente hicieron las preguntas correctas para clarificar requerimientos durante todo el proyecto.',
    },
  },
  {
    enabled: false,
    name: { en: '', es: '' },
    role: { en: '', es: '' },
    quote: { en: '', es: '' },
  },
  {
    enabled: false,
    name: { en: '', es: '' },
    role: { en: '', es: '' },
    quote: { en: '', es: '' },
  },
];
