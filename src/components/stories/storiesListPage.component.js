import React from 'react';
import { MainMenu } from '../core/mainMenu.component';
import StoriesList from './storiesList.component';
import MainTitle from './mainTitle.component';

export const StoriesListPage = () => (
  <div>
    <MainMenu />
    <MainTitle />
    <StoriesList />
  </div>
);

export default StoriesListPage;