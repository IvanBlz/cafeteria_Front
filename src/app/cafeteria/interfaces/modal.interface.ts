

export interface Modal{
    title: string;
    subtitle: string;
    value: string;
    width?: string;
    height?: string;
    content: Content[];
    buttons: Button[];
}


export interface Button {
    text:  string;
    color: string;
  }
  
  export interface Content {
    text:    string;
    element?: string;
    type?:    string;
    name?:    string;
    value?:  string;
    placeholder?: string;
    options: Option[];
  }
  
  export interface Option {
    value: boolean | string;
    id?: never|string;
    text:  string;
  }

