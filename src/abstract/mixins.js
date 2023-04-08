// MEDIA QUERY MANAGER

/*
     0  -  600px:    Phone
   600  -  900px:    Tablet portrait  
   900  -  1200px:   Tablet landscape
  [1200  -  1800px]    is where our normal styles apply
  1800  +  Big desktop
*/

const respondPhone = `
    @media (max-width: 600px) { @content };
`