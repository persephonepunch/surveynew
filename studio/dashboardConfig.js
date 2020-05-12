export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebb081c5e2d42f5cf89b34d',
                  title: 'Sanity Studio',
                  name: 'surveynew-studio',
                  apiId: '53266731-5c35-4d1a-977b-016c59603dc0'
                },
                {
                  buildHookId: '5ebb081c667725c92f61d26a',
                  title: 'Landing pages Website',
                  name: 'surveynew',
                  apiId: 'd52a35b5-507d-4d4f-8214-163b38cf81dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/persephonepunch/surveynew',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://surveynew.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
