import portfolio from '../../assets/portfolio.png';
import ursaui from '../../assets/ursa-ui-2.png';
import zenius from '../../assets/zenius-2.png';
import storybookSnippets from '../../assets/storybook-snippets.png';
import littleLemon from '../../assets/little-lemon.png';

const projects = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    image: portfolio,
    actions: [
      {
        id: 'portfolio-1',
        label: 'View Code',
        url: 'https://www.github.com/jayantasamaddar/portfolio',
      },
    ],
  },
  {
    id: 'ursa-ui-kit-monorepo',
    title: 'UI Kit Monorepo',
    image: ursaui,
    actions: [
      {
        id: 'ursa-ui-1',
        label: 'View Code',
        url: 'https://github.com/jayantasamaddar/ursa',
      },
      {
        id: 'ursa-ui-2',
        label: 'NPM',
        url: 'https://www.npmjs.com/package/@zenius-one/ursa',
      },
    ],
  },
  {
    id: 'zenius-omni-channel-shipping-solution',
    title: 'Omni-Channel Shipping Solution',
    image: zenius,
    actions: [
      {
        id: 'zenius-1',
        label: 'View Code',
        url: 'https://github.com/jayantasamaddar/zenius-omni--frontend',
      },
      {
        id: 'zenius-2',
        label: 'Read Blog',
        url: '/blog/projects/zenius',
      },
    ],
  },
  {
    id: 'storybook-snippets-vs-code-extension',
    title: 'Storybook Snippets',
    image: storybookSnippets,
    actions: [
      {
        id: 'storybook-snippets-1',
        label: 'View Code',
        url: 'https://github.com/jayantasamaddar/component-library-kit/tree/main/extensions/storybook-snippets',
      },
      {
        id: 'storybook-snippets-2',
        label: 'VS Marketplace',
        url: 'https://marketplace.visualstudio.com/items?itemName=jayantasamaddar.clk-storybook-snippets',
      },
      {
        id: 'storybook-snippets-3',
        label: 'Storybook Blog',
        url: 'https://storybook.js.org/blog/community-showcase-4/',
      },
    ],
  },
  {
    id: 'little-lemon-restaurant-reservation',
    title: 'Little Lemon',
    image: littleLemon,
    actions: [
      {
        id: 'little-lemon-1',
        label: 'View Code',
        url: 'https://github.com/jayantasamaddar/little-lemon-meta-frontend-capstone',
      },
    ],
  },
];

export default projects;
