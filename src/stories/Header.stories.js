import Header from '../components/Header';

export default {
  title: 'UI/Header',
  component: Header,
  argTypes: {
    categories: {
      type: 'string',
      description: 'Название категории новостей',
      defaultValue: 'all',
      options: ['all', 'places', 'people', 'events'],
      control: { type: 'radio' }
    }
  }
};

function Template(args) {
  return <Header {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  //   user: {
  //     name: 'Jane Doe',
  //   },
};
