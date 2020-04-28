// @flow

import React, { ReactNode } from 'react';
import type { ComponentType } from 'react';
import numeral from 'numeral';

import type { Props } from './BigNumber.types.js';
import * as Styles from './BigNumber.styles.js';


declare type PreviousNumberProps = {

    current: number,
    yesterday: number | null,

}; // PreviousNumberProps


const PreviousNumber: ComponentType<PreviousNumberProps> = ({ current, yesterday }: PreviousNumberProps): ReactNode => {

    if ( !yesterday ) return null;

    const
        difference = current - yesterday,
        value = difference > 0
            ? `Up by ${ difference }`
            : (difference < 0 && `Down by ${ Math.abs(difference) }`) || 'No change';


    return <Styles.ChangeHint className="govuk-body govuk-!-font-size-16 big-number-change">
        { value }&nbsp;from the day before
    </Styles.ChangeHint>

};


const BigNumber: ComponentType<Props> = ({ caption, number, description, asterisk, yesterday = null }: Props): ReactNode => {

    return (
        <Styles.Container>
            <Styles.Caption className="govuk-heading-m">{ caption }</Styles.Caption>
            <Styles.Number className="govuk-heading-l big-number">
                { numeral(number).format('0,0') }{ asterisk ? '*' : '' }
            </Styles.Number>
            <PreviousNumber yesterday={ yesterday } current={ number } />
            <Styles.Caption className="govuk-!-font-size-14">{ description }</Styles.Caption>
        </Styles.Container>
    );

}; // BigNumber

export default BigNumber;
