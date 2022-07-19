import React from 'react';
import { ListItem, Pane, Image, Text, Heading, Paragraph, Link, PeopleIcon } from 'evergreen-ui';

function PreviewThumbnail({
    id,
    category,
    title,
    spoiler,
    image,
    comments = 24
    }) {
    // const path = title.replace(/\s/g, '-');
    let cutTextThumbnail = spoiler.slice(0, 100);

    if (cutTextThumbnail.length < spoiler.length) {
        cutTextThumbnail += '... ';
        }

    return (
        <Link
            size={500}
            color='neutral'
            href={`/${id}`}>
            <ListItem
                maxWidth='250px'
                height='320px'
                overflow='hidden'
                display='flex'
                flexDirection='column'
                flexBasis='calc(100% / 4 - 30px)'
                marginLeft='30px'
                marginBottom='30px'
                position='relative'
                paddingBottom='50px'
                // border='1px solid red'
            >
                <Pane
                    marginBottom='10px'
                    // border='1px solid blue'
                >
                    <Image
                        display='block'
                        width='250px'
                        height='auto'
                        borderRadius='4px'
                        src={`images/${image}`}
                        alt='article'
                    />
                </Pane>
                <Pane
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    marginBottom='5px'
                    // border='1px solid green'
                >
                    <Link
                        display='block'
                        size={500}
                        href={`/${id}`}
                    // >{category.label}
                          >{category}
                    </Link>
                    <Pane display='flex'
                          justifyContent='flex-end'
                          alignItems='center'
                        // border='1px solid pink'
                    >
                        <PeopleIcon
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
                >{title}
                </Heading>
                <Pane
                    position='absolute'
                    bottom='0px'
                    // border='1px solid green'
                >
                    <Paragraph
                        lineHeight='1.15'
                        size={500}
                    >{cutTextThumbnail}
                    </Paragraph>
                </Pane>
            </ListItem>
        </Link>
    );
}

export default PreviewThumbnail;
