import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react'

export const MainTitle = () => (
    <Container text style={{ marginTop: '5em'}} >
    <Header as='h1' >
    <Icon inverted name = "hacker news" size = "big" color='red'/>
    News Stories and Comments From HackerNews
    <Header as='h6'>Top 10 News Stories and related - up to - 20 comments from Y Combinator's API</Header>
    </Header>
    </Container>
);

export default MainTitle;