module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'List',
  description: 'List',
  properties: {
    list_items: {
      title: 'List Items',
      type: 'array',
      description: 'Array of strings of list of items',
      items: {
        type: 'array',
        title: 'list items in individual arrays',
        properties: {
          type: 'string',
          title: 'item',
        },
      },
    },
    text_size: {
      title: 'Text Size',
      type: 'string',
      enum: ['xs', 's', 'm', 'l', 'xl'],
      enumNames: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
    },
    bullets: {
      title: 'Bullets',
      type: 'boolean',
      description: 'Display bullets next to list items',
    },
    ordered: {
      title: 'Ordered',
      type: 'boolean',
      description: 'Display ordered numbers next to list items',
    },
    text_color: {
      title: 'Text Color',
      type: 'string',
      description: 'Any utility color class',
    },
    columns: {
      title: 'Columns',
      type: 'string',
      enum: ['1', '2', '3', '4'],
      enumNames: ['1', '2', '3', '4'],
    },
  },
  examples: [
    {
      list_items: [
        ['JSON'],
        ['React'],
        ['Arrays'],
        ['If Statements'],
        ['Math'],
        ['Logic'],
        ['Jokes'],
        ['Interent'],
        ['Sorcery']
      ],
      text_size: 'xl',
      bullets: false,
      ordered: true,
      columns: '3',
    },
    {
      list_items: [
        ['JSON'],
        ['React'],
        ['Arrays'],
        ['If Statements'],
        ['Math'],
      ],
      text_size: 'm',
      bullets: true,
      ordered: false,
      columns: '1',
    },
  ],
};
