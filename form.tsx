import React from 'react';
import { InputInterface } from './interfaces';
const s = {
  xs: 2,
  s: 4,
  m: 6,
  l: 8,
  xl: 10
}

const addSection  = (section: string, formConfig:InputInterface[]) => formConfig.reduce((acc, curr)=>({...acc, name: `${section}[${name}]`}));

const numberPattern = (minLength, maxLength) => (
  {
    pattern: `^[0-9]{${minLength},${maxLength || ''}}$`,
    ...minLength && {minLength},
    ...maxLength && {maxLength},
  }
);

const formConfig: InputInterface[] = [
  { name: 'Informacion personal', type: 'header', },
  { name: 'nombre', label: 'Nombre o Razon Social' },
  { name: 'curp', label: 'CURP/RFC', cols: s.m },
  { name: 'uso', label: 'Uso que dara al inmueble', cols: s.m },
  { name: 'email', type: 'email', cols: s.m, label: 'Email', placeholder: 'nombre2020@dominio.com' },
  { name: 'lada', type: 'tel', cols: s.xs, label: 'Lada', pr: 1, ...numberPattern(3,4) },
  { name: 'phone', type: 'tel', cols: s.s, label: 'Telefono', pl: 1, pr: 1, ...numberPattern(7, 7) },
  { name: 'habitantes', type: 'number', label: 'Numero de personas que ocuparan el inmueble', ...numberPattern(1, 1) },
  { name: 'kids', type: 'number', cols: s.m, label: 'Niños', ...numberPattern(1, 1) },
  { name: 'pets', type: 'number', cols: s.m, label: 'Mascotas', ...numberPattern(1, 1) },
  { name: 'Empresa donde trabaja y/o negocio', type: 'header', },
  { name: 'Informacion sobre su arrendamiento actual', type: 'header', },
  { name: <>Referencias<small> si es para arrendar un local, por favor poner referencias comerciales</small></>, type: 'header', },
];

export { formConfig };