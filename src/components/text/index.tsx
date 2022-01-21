import React, { ReactElement } from 'react';

import TextSegment from '../../components/textSegment';

interface TextProps {
  text: string;
  name: string;
}

export const Text = (props: TextProps): ReactElement => {
  const segments = props.text.split(' ');

  return (
    <div>
      <div style={{ textAlign: 'right', padding: '0.5rem' }}>{props.name}</div>
      <p
        style={{
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          paddingLeft: '0.7rem',
          paddingRight: '0.7rem',
        }}
      >
      {segments.map((segment: string): ReactElement => {
          return <TextSegment segment={segment} />
      })}
      </p>
    </div>
  );
};

export default Text;
