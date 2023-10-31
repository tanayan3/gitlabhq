export const USERS_RESPONSE_MOCK = {
  data: {
    project: {
      id: 'gid://gitlab/Project/20',
      autocompleteUsers: [
        {
          id: 'gid://gitlab/User/1',
          avatarUrl: '/uploads/-/system/user/avatar/1/avatar.png',
          name: 'Administrator',
          username: 'root',
          __typename: 'AutocompletedUser',
        },
        {
          id: 'gid://gitlab/User/15',
          avatarUrl:
            'https://www.gravatar.com/avatar/c4ab964b90c3049c47882b319d3c5cc0?s=80\u0026d=identicon',
          name: 'Corrine Rath',
          username: 'laronda.graham',
          __typename: 'AutocompletedUser',
        },
      ],
      __typename: 'Project',
    },
  },
};
