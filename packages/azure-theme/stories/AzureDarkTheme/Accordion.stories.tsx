import * as React from 'react';
import { AzureDarkTheme } from '@fluentui-contrib/azure-theme';
import { FluentProvider } from '@fluentui/react-components';
import { AccordionExample } from '../../src/components/fluent/AccordionExample';

export const Accordion = () => (
  <FluentProvider theme={AzureDarkTheme}>
    <AccordionExample />
  </FluentProvider>
);
