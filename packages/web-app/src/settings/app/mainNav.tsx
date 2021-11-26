import type { NavElement } from '~/types/app'

export const OUR_SOLUTION: NavElement = {

  title: 'Our Solution',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  subElements: [
    { 
      title: 'Products', 
      subElements: [
        {
          title: 'Accept Payments',
          desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.',
          to: '/products'
        },
        {
          title: 'Make Payments',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          to: '/products'
        },
      ],
    },
    { 
      title: 'Solutions', 
      ext: {
        sameColumn: true
      },
      subElements: [
        {
          title: 'Ecommerce',
          desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.',
          to: '/'
        },
        {
          title: 'Subscription',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          to: '/'
        },
        {
          title: 'Forex',
          desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit.',
          to: '/'
        },
        {
          title: 'Crypto',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          to: '/'
        },
        {
          title: 'E-wallet',
          desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.',
          to: '/'
        },
        {
          title: 'Adult Media',
          desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit.',
          to: '/'
        },
        {
          title: 'Cannabis',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          to: '/'
        },
      ]
    },
    { 
      title: 'Features', 
      subElements: [
        {
          title: 'Global Aquiring',
          desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.',
          to: '/'
        },
        {
          title: 'Rapid Approval',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          to: '/'
        },
        {
          title: 'Rapid Settlement',
          desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit.',
          to: '/'
        },
        {
          title: 'Payment methods',
          desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.',
          to: '/'
        },
        {
          title: 'Risk Management and AI Fraud Protection',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          to: '/'
        },
        {
          title: 'Revenue Optimization',
          desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit.',
          to: '/'
        },
        {
          title: 'Customer Insights',
          desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.',
          to: '/'
        },
      ]
    },
    { 
      title: 'How we work', 
      subElements: [
        {
          title: 'Getting Started',
          desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.',
          to: '/'
        },
        {
          title: 'Customer Success',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          to: '/'
        },
        {
          title: 'Partner Ecosystem',
          desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit.',
          to: '/'
        },
        {
          title: 'Lowest Pricing',
          desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.',
          to: '/'
        },
        {
          title: 'Free Full-service On-boarding',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          to: '/'
        },
      ]
    },
  ],
}

export const ABOUT_US = { 
  title: 'About Us', 
  desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  ext: {
    noSeparateLastColumn: false
  },
  subElements: [
    { 
      title: 'Explore', 
      desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      ext: {
        twoColumns: true
      },
      subElements: [
        {
          title: 'Our Story',
          desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.',
          to: '/'
        },
        {
          title: 'Press and Media',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          to: '/'
        },
        {
          title: 'Investor Relations',
          desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit.',
          to: '/'
        },
        {
          title: 'Careers',
          desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.',
          to: '/'
        },
        {
          title: 'Contant Us',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          to: '/'
        },
      ]
    },
    { 
      title: 'Resources', 
      desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      subElements: [
        {
          title: 'Knowledge Hub',
          desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.',
          to: '/'
        },
        {
          title: 'Blog',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          to: '/'
        },
        {
          title: 'Newsletter',
          desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit.',
          to: '/'
        },
      ]
    }
  ]
}

export const DOCUMENTATION = { 
  title: 'Documentation', 
  desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  to: '/'
}

export const APIKEY = { 
  title: 'API Keys', 
  desc: 'Test and Production mode API keys',
  to: '/apikeys',
}

export const MESSAGES = { 
  title: 'Messages', 
  desc: 'View your messages',
  to: '/messages',
}

export default [
//  OUR_SOLUTION,
//  ABOUT_US,
MESSAGES,
  //APIKEY,
//  DOCUMENTATION
] as NavElement[]