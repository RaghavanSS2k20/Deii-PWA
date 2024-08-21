
export const HamburgerSVGComponent = ({size, fill}) => (
    <svg
      fill={fill}
      width={`${size}px`}  // Use template literal to append 'px'
      height={`${size}px`} // Use template literal to append 'px'
      viewBox="-2.5 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
      className="cf-icon-svg"
      
    >
      <path d="M.789 4.836a1.03 1.03 0 0 1 1.03-1.029h10.363a1.03 1.03 0 1 1 0 2.059H1.818A1.03 1.03 0 0 1 .79 4.836zm12.422 4.347a1.03 1.03 0 0 1-1.03 1.029H1.819a1.03 1.03 0 0 1 0-2.059h10.364a1.03 1.03 0 0 1 1.029 1.03zm0 4.345a1.03 1.03 0 0 1-1.03 1.03H1.819a1.03 1.03 0 1 1 0-2.059h10.364a1.03 1.03 0 0 1 1.029 1.03z" />
    </svg>
  );

export const  AddSVGComponent = ({size, fill}) => (
    <svg
      fill={fill}
      width={`${size}px`}  // Use template literal to append 'px'
      height={`${size}px`}
      viewBox="0 0 24 24"
      id="plus"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-color"
    //   {...props}
    >
      <path
        id="primary"
        d="M12,20a1,1,0,0,1-1-1V13H5a1,1,0,0,1,0-2h6V5a1,1,0,0,1,2,0v6h6a1,1,0,0,1,0,2H13v6A1,1,0,0,1,12,20Z"
       
      />
    </svg>
  );

export const UserSVGComponent = ({size,fill}) => (
    <svg
        fill={fill}
        width={`${size}px`}  // Use template literal to append 'px'
        height={`${size}px`}
        viewBox="0 0 15 15"
        
        xmlns="http://www.w3.org/2000/svg"
        
    >
      <path
        d="M7.5 0C5.56717 0 4 1.56567 4 3.49804C4 5.43041 5.56717 6.99609 7.5 6.99609C9.43283 6.99609 11 5.43041 11 3.49804C11 1.56567 9.43283 0 7.5 0Z"
        
      />
      <path
        d="M5.5 8.99414C3.56711 8.99414 2 10.5605 2 12.4936V14.9909H13V12.4936C13 10.5605 11.4329 8.99414 9.5 8.99414H5.5Z"
        
      />
    </svg>
  );

