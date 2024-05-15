export const data = {
  name: 'Root',
  type: 'folder',
  children: [
    {
      name: 'Documents',
      type: 'folder',
      children: [
        {
          name: 'Work',
          type: 'folder',
          children: [
            {
              name: 'Reports',
              type: 'folder',
              children: [
                {
                  name: 'Q1',
                  type: 'file',
                },
                {
                  name: 'Q2',
                  type: 'file',
                },
              ],
            },
            {
              name: 'Presentations',
              type: 'folder',
              children: [
                {
                  name: 'Client_A',
                  type: 'file',
                },
                {
                  name: 'Client_B',
                  type: 'file',
                },
              ],
            },
          ],
        },
        {
          name: 'Personal',
          type: 'folder',
          children: [
            {
              name: 'Vacation',
              type: 'file',
            },
            {
              name: 'Family',
              type: 'file',
            },
          ],
        },
      ],
    },
    {
      name: 'Photos',
      type: 'folder',
      children: [
        {
          name: '2019',
          type: 'folder',
          children: [
            {
              name: 'Summer',
              type: 'file',
            },
            {
              name: 'Winter',
              type: 'file',
            },
          ],
        },
        {
          name: '2020',
          type: 'folder',
          children: [
            {
              name: 'Spring',
              type: 'file',
            },
            {
              name: 'Autumn',
              type: 'file',
            },
          ],
        },
      ],
    },
  ],
}
