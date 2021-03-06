import React from 'react';
import DataTypeLabel from './DataTypeLabel';
//theme
import Theme from './../../themes/getStyle';
import { DateConvert } from '../../helpers/dates';

export default class extends React.PureComponent {
    render() {
        const type_name = 'date';
        const {props} = this;

        return (
            <div {...Theme(props.theme, 'date')}>
                <DataTypeLabel type_name={type_name} {...props} />
                <span class="date-value" {...Theme(props.theme, 'date-value')}>
                    {DateConvert(props.value)}
                </span>
            </div>
        );
    }
}
