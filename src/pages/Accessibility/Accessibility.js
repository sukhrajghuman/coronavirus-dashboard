// @flow

import React from 'react';
import type { ComponentType } from 'react';

import type { Props } from './Accessibility.types';
import * as Styles from './Accessibility.styles';

const Accessibility: ComponentType<Props> = ({}: Props) => {
  return (
    <Styles.Container className="govuk-width-container">

      <h2 id="accessibility-statement-for-website-name">Accessibility statement for Track coronavirus (COVID-19)</h2>
      <p>This accessibility statement applies to coronavirus.data.go.uk.</p>
      <p>This website is run by Public Health England. We want as many people as possible to be able to use this website. For example, that means you should be able to:</p>
      <ul>
        <li>change colours, contrast levels and fonts</li>
        <li>zoom in up to 300% without the text spilling off the screen</li>
        <li>navigate most of the website using just a keyboard</li>
        <li>navigate most of the website using speech recognition software</li>
        <li>listen to most of the website using a screen reader (including the most recent versions of JAWS, NVDA and VoiceOver)</li>
      </ul>
      
      <h3 id="how-accessible-this-website-is">How accessible this website is</h3>
      <p>We know some parts of this website are not fully accessible:</p>
      <ul>
        <li>the map selection controls are not keyboard accessible</li>
        <li>selecting a row in the table is not keyboard accessible</li>
        <li>scrolling through the tables is not keyboard accessible</li>
      </ul>
      
      <h3 id="reporting-accessibility-problems-with-this-website">Reporting accessibility problems with this website</h3>
      <p>We’re always looking to improve the accessibility of this website. If you find any problems not listed on this page or think we’re not meeting accessibility requirements, contact: [provide both details of how to report these issues to your organisation, and contact details for the unit or person responsible for dealing with these reports].</p>
      
      <h3 id="enforcement-procedure">Enforcement procedure</h3>
      <p>The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018
(the ‘accessibility regulations’). If you’re not happy with how we respond to your complaint, <a rel="external" href="https://www.equalityadvisoryservice.com/" class="govuk-link">contact the Equality Advisory and Support Service (EASS)</a>.</p>
      
      <h2 id="technical-information-about-this-websites-accessibility">Technical information about this website’s accessibility</h2>
      <p>Public Health England is committed to making its website accessible, in accordance with the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.</p>
      
      <h3 id="compliance-status">Compliance status</h3>
      <p>This website is partially compliant with the <a rel="external" href="https://www.w3.org/TR/WCAG21/" class="govuk-link">Web Content Accessibility Guidelines version 2.1</a> AA standard, due to the non-compliances and exemptions listed below.</p>

      <h2 id="non-accessible-content">Non-accessible content</h2>
      <p>The content listed below is non-accessible for the following reasons.</p>

      <h3 id="non-compliance-with-the-accessibility-regulations">Non-compliance with the accessibility regulations</h3>
      <p></p>
      <p>The regional breakdown table rows cannot be selected with a keyboard. This fails WCAG 2.1 success criterion 2.1.1 (Keyboard).</p>
      <p>The tables cannot be scrolled with a keyboard. This fails WCAG 2.1 success criterion 2.1.1 (Keyboard).</p>

      <h3 id="content-thats-not-within-the-scope-of-the-accessibility-regulations">Content that’s not within the scope of the accessibility regulations</h3>
      <h4 id="pdfs-and-other-documents">Interactive map</h4>
      <p>Regions on the interactive map cannot be selected with a keyboard. There are no plans to fix this as this functionality exists in the accompanying tables.</p>

      <h2 id="preparation-of-this-accessibility-statement">Preparation of this accessibility statement</h2>
      <p>This statement was prepared on 3 April 2020. It was last reviewed on 3 April 2020.</p>
      <p>This website was last tested on 3 April 2020. The test was carried out internally by Public Health England and NHSx.</p>
      
    </Styles.Container>
  );
};

export default Accessibility;