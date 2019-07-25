import { DateTime } from 'luxon';

export const DATE_FORMAT = 'yyyy-LL-dd';

export const DateIsValid = (input) => {
    return DateIsValidInternal(input) || 
        DateIsValidExternal(input);
};

export const DateConvert = (input) => {
    if (DateIsValidInternal(input)) {
        return DateConvertIn(input);
    }
    if (DateIsValidExternal(input)) {
        return DateConvertOut(input);
    }
};

export const DateIsValidInternal = (input) => {
    return DateTime.fromFormat(String(input), DATE_FORMAT).isValid;
};

export const DateIsValidExternal = (input) => {
    return DateTime.fromISO(String(input)).isValid;
};

export const DateConvertIn = (input) => {
    return DateTime.fromFormat(String(input), DATE_FORMAT).toFormat(DATE_FORMAT);
};

export const DateConvertOut = (input) => {
    return DateTime.fromISO(String(input)).toFormat(DATE_FORMAT);
};