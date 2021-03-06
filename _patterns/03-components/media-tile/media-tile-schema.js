const buttonSchema = require('../button/button-schema');

module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Media Tile',
  description: 'Full Image overlayed with optional Title, Body, and Buttons.',
  properties: {
    title: {
      title: 'Title',
      type: 'string',
      description: 'Main heading of the media tile.',
    },
    url: {
      title: 'Url',
      type: 'string',
      description:
        'Url or href. If added, a click or press of the media tile will forward to the given url or href.',
    },
    text_align: {
      title: 'Text Align - Horizontal',
      type: 'string',
      description: 'Adjust horizontal alignment of text.',
      enum: ['left', 'center', 'right'],
      enumNames: ['Left', 'Center', 'Right'],
    },
    title_bg_color: {
      title: 'Title Background Color',
      type: 'string',
      description: 'Any utility color class.',
      enum: [
        'blue',
        'blue--light',
        'green',
        'iron',
        'yellow',
        'white',
        'black',
      ],
      enumNames: [
        'Blue',
        'Light Blue',
        'Green',
        'Iron',
        'Yellow',
        'White',
        'Black',
      ],
    },
    title_size: {
      title: 'Title Size',
      type: 'string',
      description:
        'Title size corresponds to site-wide heading sizes. 1 = h1, 2 = h2, etc.',
      enum: ['1', '2', '3', '4', '5', '6'],
      enumNames: [
        'Jumbo',
        'Extra Large',
        'Large',
        'Medium',
        'Small',
        'Extra Small',
      ],
    },
    title_text_color: {
      title: 'Title Text Color',
      type: 'string',
      description: 'Color of the main heading. Any utility color class.',
      enum: ['white', 'blue', 'green', 'yellow', 'black'],
      enumNames: ['White', 'Blue', 'Green', 'Yellow', 'Black'],
    },
    body: {
      title: 'Body Text',
      type: 'string',
      description: 'Text content of the main body of the media tile.',
    },
    body_text_color: {
      type: 'string',
      title: 'Body Text Color',
      description:
        'Color of the text of the main body. Any utility color class.',
      enum: ['white', 'blue', 'green', 'yellow', 'black'],
      enumNames: ['White', 'Blue', 'Green', 'Yellow', 'Black'],
    },
    body_text_size: {
      title: 'Body Text Size',
      type: 'string',
      description: 'Font size of the main body text.',
      enum: ['s', 'm', 'l', 'xl', 'xxl'],
      enumNames: ['Small', 'Medium', 'Large', 'Extra Large', 'XX Large'],
    },
    background_image: {
      type: 'string',
      title: 'Background Image',
      description: 'Path to image.',
    },
    image_overlay: {
      title: 'Image Overlay',
      type: 'string',
      enum: ['blue', 'green', 'yellow', 'black', 'none'],
      enumNames: ['Blue', 'Green', 'Yellow', 'Black', 'None'],
    },
    min_height: {
      title: 'Minimum Element Height',
      type: 'string',
      description: 'Minimum height of the entire media tile.',
      enum: ['0', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
      enumNames: [
        'None',
        'XX Small',
        'Extra Small',
        'Small',
        'Medium',
        'Large',
        'Extra large',
        'XX Large',
      ],
    },
    bg_color: {
      type: 'string',
      title: 'Background Color',
      description:
        'Background color of media tile. Note: only visible if no image is provided.',
      enum: ['blue', 'green', 'yellow', 'iron', 'black', 'none'],
      enumNames: ['Blue', 'Green', 'Yellow', 'Iron', 'Black', 'None'],
    },
    buttons: {
      title: 'Buttons',
      type: 'array',
      description: 'List of objects passed to @components/button.twig',
      items: buttonSchema,
    },
    full_width: {
      type: 'boolean',
      title: 'Full Width',
      description: 'Adds class u-full-width to span entire screen',
    },
  },
  examples: [
    {
      title: 'Who We Are',
      text_align: 'center',
      title_size: '1',
      title_text_color: 'white',
      body:
        'We founded Basalt to advance the industry with a better approach to web development and design. We are developers, designers, agency executives, entrepreneurs, marketers, and innovators.',
      body_text_color: 'white',
      body_text_size: 'l',
      image_overlay: 'black',
      min_height: 'm',
      buttons: [
        {
          text: 'Learn More',
          url: '#',
          size: 'medium',
          color: 'blue',
        },
      ],
      desc: 'Who We Are',
      background_image: '/images/brand-stock/clarisse-meyer-304306.jpg',
    },
  ],
};
