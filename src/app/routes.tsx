import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';
import { ClinicalResearchPage } from './pages/ClinicalResearchPage';
import { NutraceuticalEfficacyPage } from './pages/NutraceuticalEfficacyPage';
import { HumanBehaviorPage } from './pages/HumanBehaviorPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  { path: '/', Component: HomePage },
  { path: '/article', Component: ArticlePage },
  { path: '/practice/clinical-research', Component: ClinicalResearchPage },
  { path: '/practice/nutraceutical-efficacy', Component: NutraceuticalEfficacyPage },
  { path: '/practice/human-behavior', Component: HumanBehaviorPage },
  { path: '*', Component: NotFoundPage },
]);
