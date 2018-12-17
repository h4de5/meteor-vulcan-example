/* 

Register the GraphQL fragment used to query for data

*/

import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment CategoriesItemFragment on Category {
    _id
    createdAt
    userId
    user {
      displayName
    }
    name
		description
    parentId
    parent {
      ... on Category {
        _id
        name
				description
      }
    }
  }
`);
