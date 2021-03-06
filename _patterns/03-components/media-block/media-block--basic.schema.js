const mainSchema = require('./media-block-schema');

/* eslint-disable camelcase */
const schema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Basic Media Block',
  description: 'Image, Title, Body, and Buttons make this really flexible.',
  examples: [
    {
      title: 'What Is Basalt?',
      body:
        'Basalt represents our roots—the Pacific Northwest, and our belief that quality design begins with rock‑solid scalable components.',
      desc: 'A Community of Experts',
      media: '/images/brand-stock/annie-spratt-294450.jpg',
      media_alignment: 'top',
      media_size: 'm',
    },
  ],
};

const { title, body, media, media_alignment } = mainSchema.properties;

schema.properties = {
  title,
  body,
  media,
  media_alignment,
};

module.exports = schema;
