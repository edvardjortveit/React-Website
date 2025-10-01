import { MantineColorsTuple, rem } from "@mantine/core";

export const COUNTRIES = [
  "Kina",
  "Japan",
  "Malaysia",
  "Sør-Korea",
  "Laos",
  "Thailand",
  "Vietnam",
  "Myanmar",
  "Singapore",
  "India",
  "Filippinene",
  "Russland",
  "Australia",
  "New Zealand",
] as const;

export const ICON_STYLE = { width: rem(25), height: rem(25) };

export const MY_COLOR: MantineColorsTuple = [
  "#e6ffeb",
  "#d3f9da",
  "#a8f2b6",
  "#7aea8f",
  "#53e36d",
  "#3bdf58",
  "#2bdd4c",
  "#1bc43d",
  "#0dae33",
  "#009727",
];

export const BACKGROUND_IMAGE_STYLE = {
  marginBottom: '20px',
  width: '100vw',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
  marginTop: 0
};

export const HEADER_STYLE = {
  backgroundColor: '#f8f9fa',
  borderBottom: '1px solid #dee2e6'
};

export const HEADER_CONTAINER_STYLE = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%'
};

export const MAIN_STYLE = {
  padding: 0,
  margin: 0
};

export const CONTENT_CONTAINER_STYLE = {
  padding: '0 16px'
};
