import ArticlesList from '../components/ArticlesList';

export default {
  title: 'UI/ArticlesList',
  component: ArticlesList,
  argTypes: {
    highlights: {
      type: 'string',
      description: 'Показывает основные моменты сверху',
      defaultValue: 'true',
      options: ['true', 'false'],
      control: {
        type: 'radio'
      }
    },

    haveMore: {
      type: 'string',
      description: 'Показывает Load more news кнопку',
      defaultValue: 'false',
      options: ['true', 'false'],
      control: {
        type: 'radio'
      }
    },

    articles: {
      type: 'array',
      description: 'Миссив статтей',
      // options: ['true', 'false'],
      control: {
        type: 'radio'
      }
    }
  }
};

function Template(args) {
  return <ArticlesList {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
