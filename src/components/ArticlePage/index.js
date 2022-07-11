import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Image, Overlay, Pane, Paragraph } from 'evergreen-ui';

import { Data } from '../Header/model';

function ArticlePage() {
  const { title: titlePath } = useParams();
  const element = Data.find(
    item => item.title.replace(/\s/g, '-') === titlePath
  );

  if (!element) {
    // redirect 404
  }
  const { title, image, content, thumbnail } = element;
  const [isShown, setIsShown] = useState(false);

  return (
    <Pane width='900px' paddingX='15px' marginX='auto' marginY='40px'>
      <Image
        display='block'
        width='900px'
        height='auto'
        borderRadius='4px'
        src={image}
        alt='article'
      />
      <Heading
        textTransform='uppercase'
        marginY='50px'
        height='auto'
        width='900px'
        display='flex'
        float='top'
        // border='2px solid blue'
      >
        {title}
      </Heading>

      <Paragraph lineHeight='1.5' size={500}>
          <Image
              float='right'
              src={thumbnail}
              display='block'
              margin='10px'
              width='200px'
              height='auto'
              borderRadius='4px'
              alt='article'
              onClick={() => setIsShown(true)}
          />
        {content}
      </Paragraph>
      <Overlay
        isShown={isShown}
        onExit={() => setIsShown(false)}
        preventBodyScrolling
        containerProps={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column'
        }}
      >
        <Image
          zIndex={1}
          flexShrink={0}
          elevation={0}
          width='50vw'
          height='auto'
          // paddingX='15px'
          paddingY='200px'
          marginX='auto'
          borderRadius='4px'
          src={thumbnail}
          alt='article'
        />
      </Overlay>
    </Pane>
  );
}

export default ArticlePage;
