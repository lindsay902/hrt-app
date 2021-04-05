import * as React from 'react';
import BeautyPollContextProvider from '../../Context/PollResults/BeautyPollResults';
import BeautyPollData from '../../Context/PollResults/BeautyPollResults';

export default function BeautyPoll() {
  return (
    <BeautyPollContextProvider>
      <BeautyPollData />
    </BeautyPollContextProvider>
  );
}
