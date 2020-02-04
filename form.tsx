import { InputInterface } from './interfaces';
const s = {
  xs: 2,
  s: 4,
  m: 6,
  l: 8,
  xl: 10
}

const numberPattern = (minLength, maxLength) => (
  {
    pattern: `^[0-9]{${minLength},${maxLength || ''}}$`,
    ...minLength && {minLength},
    ...maxLength && {maxLength},
  }
);

const formConfig: InputInterface[] = [
  { name: 'name', label: 'Name' },
  { name: 'last_name', label: 'Last name',placeholder: 'Last Name', cols: s.m },
  { name: 'email', type: 'email', cols: s.m, label: 'Email', placeholder: 'john@doe.com' },
  { name: 'lada', type: 'tel', cols: s.xs, label: 'Area', pr: 1, ...numberPattern(3,4) },
  { name: 'phone', type: 'tel', cols: s.m, label: 'Phone', pl: 1, pr: 1, ...numberPattern(7, 7) },
  { name: 'ext', type: 'number', cols: s.s, label: 'Ext', pl: 1, ...numberPattern(0, 5) },
  { name: 'submit', type: 'submit', value: 'Send', btnClass: 'btn-warning' },
];

export { formConfig };