import Preview from '../components/Preview';

export default {
  title: 'UI/Preview',
  component: Preview,
  argTypes: {
    categories: {
      type: 'string',
      description: 'Название категории новостей',
      defaultValue: 'all',
      options: ['all', 'places', 'people', 'events'],
      control: { type: 'radio' }
    },

    comments: {
      type: 'number',
      description: 'Количество отзывов на странице',
      defaultValue: 24,
      options: [6, 12, 24],
      control: { type: 'radio' }
    },

    type: {
      type: 'string',
      description: 'Тип превью',
      defaultValue: 'full',
      options: ['full', 'thumbnail'],
      control: { type: 'radio' }
    }
  }
};

function Template(args) {
  return <Preview {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
