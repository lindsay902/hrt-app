import * as React from 'react';
import MentalHealthPollContextProvider from '../../Context/PollResults/MentalHealthPollResults';
import MentalHealthPollData from '../../Context/PollResults/MentalHealthPollResults';

export default function MentalHealthPoll() {
  return (
    <MentalHealthPollContextProvider>
      <MentalHealthPollData />
    </MentalHealthPollContextProvider>
  );
}
