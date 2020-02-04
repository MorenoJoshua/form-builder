export interface InputInterface extends Partial<HTMLInputElement> {
  name: string; //Input name
  type?: string; //Input type, defaults to "text"
  cols?: number; //1-12, defines the width of the input container
  label?: string; //Label text
  pr?: number; //0-5, Padding right
  pl?: number; //0-5, Padding left
  className?: string; //Gets appended to the container classList
  btnClass?: string;
}

export interface CustomFormInterface extends Partial<HTMLFormElement> {
  fields: InputInterface[]; //Fields to render (From config hopefully)
  handleSubmit: Function; //Function to execute on submit
}