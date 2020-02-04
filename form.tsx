import React from "react";
import { InputInterface } from "./interfaces";
const s = {
  xs: 2,
  s: 4,
  m: 6,
  l: 8,
  xl: 10
};
const required = { required: true };
const asRequired = (formConfig: InputInterface[]) =>
  formConfig.reduce((acc, curr) => {
    return [...acc, { ...curr, ...required }];
  }, []);

const addSection = (section: string, formConfig: InputInterface[]) =>
  formConfig.reduce((acc, curr) => {
    return [...acc, { ...curr, name: `${section}[${curr.name}]` }];
  }, []);

const numberPattern = (minLength, maxLength) => ({
  pattern: `^[0-9]{${minLength},${maxLength || ""}}$`,
  ...(minLength && { minLength }),
  ...(maxLength && { maxLength })
});

const phone = [
  {
    name: "lada",
    type: "tel",
    cols: s.xs,
    label: "Lada",
    pr: 1,
    ...numberPattern(3, 4)
  },
  {
    name: "phone",
    type: "tel",
    cols: s.s,
    label: "Telefono",
    pl: 1,
    pr: 1,
    ...numberPattern(7, 7)
  }
];

const basicContact = [
  { name: "nombre", label: "Nombre" },
  { name: "domicilio", label: "Domicilio" },
  ...phone
];

const formConfig: InputInterface[] = [
  { name: "Informacion personal", type: "header" },
  ...asRequired([
    { name: "nombre", label: "Nombre o Razon Social" },
    { name: "curp", label: "CURP/RFC", cols: s.m }
  ]),
  { name: "uso", label: "Uso que dara al inmueble", cols: s.m },
  ...asRequired([
    {
      name: "email",
      type: "email",
      cols: s.m,
      label: "Email",
      placeholder: "nombre2020@dominio.com"
    },
    ...phone,
    {
      name: "habitantes",
      type: "number",
      label: "Numero de personas que ocuparan el inmueble",
      ...numberPattern(1, 1)
    },
    {
      name: "kids",
      type: "number",
      cols: s.m,
      label: "Niños",
      ...numberPattern(1, 1)
    },
    {
      name: "pets",
      type: "number",
      cols: s.m,
      label: "Mascotas",
      ...numberPattern(1, 1)
    },
    { name: "Empresa donde trabaja y/o negocio", type: "header" }
  ]),
  ...asRequired([
    ...addSection("work", [
      { name: "nombre", label: "Nombre o Razon Social" },
      { name: "domicilio", label: "Domicilio" },
      ...phone,
      { name: "puesto", label: "Puesto", cols: s.m },
      {
        name: "antiguedad",
        type: "number",
        cols: s.m,
        label: "Antigüedad",
        ...numberPattern(1, 1),
        placeholder: "Años"
      },
      { name: "ingreso", type: "number", cols: s.m, label: "Ingreso mensual" },
      { name: "jefe", label: "Jefe inmediato" }
    ])
  ]),
  { name: "Informacion sobre su arrendamiento actual", type: "header" },
  ...asRequired([
    ...addSection("current", [
      { name: "nombre", label: "Nombre del arrendador" },
      { name: "domicilio", label: "Domicilio de la propiedad" },
      ...phone,
      { name: "motivo", label: "Motivo de cambio", cols: s.m }
    ])
  ]),
  {
    name: (
      <>
        Referencias
        <small>
          {" "}
          si es para arrendar un local, por favor poner referencias comerciales
        </small>
      </>
    ),
    type: "header"
  },
  ...asRequired([...addSection("refs1", basicContact)]),
  ...addSection("refs2", basicContact),
  { name: "Datos del aval o responsable solidario", type: "header" },
  ...asRequired([...addSection("aval", basicContact)]),
  { name: "", type: "hr" },
  {
    type: "submit",
    label: "enviar",
    name: "submit",
    btnClass: "btn-primary"
  }
];

export { formConfig };
