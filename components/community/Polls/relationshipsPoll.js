import * as React from 'react';
import RelationshipsPollContextProvider from '../../Context/PollResults/RelationshipsPoll';
import RelationshipsPollData from '../../Context/PollResults/RelationshipsPoll';

export default function RelationshipsPoll() {
  return (
    <RelationshipsPollContextProvider>
      <RelationshipsPollData />
    </RelationshipsPollContextProvider>
  );
}
