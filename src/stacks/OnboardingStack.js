import {
    WelcomeScreen,
    Onboarding,
    OnboardingQuestions,
    OnboardingLast
  } from '../containers';
  
  export const OnboardingStack = [
    {
      name: 'WelcomeScreen',
      component: WelcomeScreen,
      key: 'WelcomeScreen',
    },
    {
      name: 'Onboarding',
      component: Onboarding,
      key: 'Onboarding',
    },
    {
      name: 'OnboardingQuestions',
      component: OnboardingQuestions,
      key: 'OnboardingQuestions',
    },
    {
      name: 'OnboardingLast',
      component: OnboardingLast,
      key: 'OnboardingLast',
    },

  ];
  