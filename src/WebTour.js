import React, { useState } from 'react';
import Tour from 'reactour';

const stepStyle = {
  color: '#666',
  background: '#dff9fb'
};

const steps = [
  {
    selector: 'h1',
    content: "Lorem Ipsum is simply dummy text the printing and typesetting industry.",
    style: stepStyle
  },
  {
    selector: '.navbar .right',
    content: 'Purus sit amet volutpat consequat mauris nunc.',
    style: stepStyle
  },
  {
    selector: '.post-title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    style: stepStyle
  },
  {
    selector: '#sidebar-title',
    content: 'Felis donec et odio pellentesque volutpat. Porttitor eget dolor morbi non arcu risus quis varius.',
    style: stepStyle
  },
  {
    selector: '.last-img',
    content: 'Eu consequat ac felis donec et odio pellentesque diam volutpat.',
    style: stepStyle
  },
  {
    selector: '.footer h2',
    content: 'Venenatis tellus in metus vulputate. Duis convallis convallis tellus id.',
    style: stepStyle
  }
];

function WebTour() {
  const [isTourOpen, setIsTourOpen] = useState(true);

  return (
    <Tour
      steps={steps}
      isOpen={isTourOpen}
      rounded={5}
      stepInteraction={true}
      maskClassName="mask"
      accentColor="#269faf"
      onRequestClose={() => setIsTourOpen(false)} />
  );
}

export default WebTour;