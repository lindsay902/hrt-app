import * as React from 'react';
import SymptomsPollContextProvider from '../../Context/PollResults/SymptomsPollResults';
import SymptomsPollData from '../../Context/PollResults/SymptomsPollResults';

export default function SymptomsPoll() {
  return (
    <SymptomsPollContextProvider>
      <SymptomsPollData />
    </SymptomsPollContextProvider>
  );
}
