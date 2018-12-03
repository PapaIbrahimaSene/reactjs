import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react'

export const MainMenu = () => (
    <Menu fixed='top' inverted color='red'>
    <Container>
    <Menu.Item as = 'a' header>
    <Icon inverted name = "plug" size = "large"/>
    ReactJS | Redux Application Fetching API Data
    </Menu.Item>
    </Container>
    </Menu>
);

export default MainMenu;