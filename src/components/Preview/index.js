import React from 'react';
import { ListItem, Pane, Image, Text, Heading, Paragraph, Link, CommentIcon } from 'evergreen-ui';

function Preview({
  id,
  category,
  title,
  spoiler,
  image,
  comments = 24,
  url,
  categoryVisibility = true }) {

  // const path = title.replace(/\s/g, '-');
  const quantityOfSymbols = categoryVisibility ? 530 : 630;
  let cutText = spoiler.slice(0, quantityOfSymbols);

  if (cutText.length < spoiler.length) {
        cutText += '... ';
        }

  return (
      <Link
          size={500}
          color='neutral'
          href={`/${id}`}>
    <ListItem
      display='flex'
      height='auto'
      // border='2px solid blue'
    >
        <Image
          display='block'
          width='250px'
          height='auto'
          marginRight='20px'
          borderRadius='4px'
          src={`images/${image}`}
          alt='article'
        />
      <Pane
        // border='2px solid black'
      >{categoryVisibility === true ? (
          <Pane
            // border='2px solid pink'
          >
          <Pane
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            marginBottom='10px'
            // border='2px solid green'

          >
            <Link
              display='block'
              size={500}
              href={url}
                >{category}
            </Link>

            <Pane
              display='flex'
              justifyContent='flex-end'
                alignItems='center'
                // border='2px solid brown'
            >
              <CommentIcon
                size={14}
                marginRight={5}
                alignItems='center'
                color='muted'
              />
              <Text
                size={500}
                color='#696f8c'
                alignItems='center'
              >{comments}
              </Text>
            </Pane>
          </Pane>
          <Heading
            textTransform='uppercase'
            marginBottom='10px'
          >{title}
          </Heading>
        </Pane>
      ) : (
        <Pane
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          marginBottom='10px'
        >
          <Heading
            textTransform='uppercase'
          >{title}
          </Heading>
          <Pane
            display='flex'
            justifyContent='flex-end'
            alignItems='center'
          >
            <CommentIcon
              size={14}
              marginRight={5}
              alignItems='center'
              color='muted'
            />
            <Text
              size={500}
              color='#696f8c'
              alignItems='center'
            >{comments}
            </Text>
          </Pane>
        </Pane>
      )}
          <Paragraph
            lineHeight='1.15'
            size={500}
          >{cutText}<Text>[More...]</Text>
          </Paragraph>
        </Pane>
    </ListItem>
      </Link>
  );
}

export default Preview;
