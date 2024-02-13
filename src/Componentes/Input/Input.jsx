import React from 'react';
import { Controller } from 'react-hook-form';
import './styles.css';

const Input = ({ leftIcon, name, control, placeholder, type, ...rest }) => {
  return (

    <div className="input-container">

      {leftIcon && <div className="icon-container">{leftIcon}</div>}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input className='input-text'
            placeholder={placeholder}
            type={type}
            id={name}
            {...field}
            {...rest}
          />
        )}
      />

    </div>

  );
};

export { Input };






// import React from 'react'
// import { Controller } from "react-hook-form";

// import {InputContainer, InputText, IconContainer } from './styles';

// const Input = ({leftIcon, name, control, ...rest}) => {


//   return (
//     <InputContainer>
//         {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
//         <Controller
//         name={name}
//         control={control}
//         render={({ field }) =>  <InputText {...field} {...rest} />}
//       />
       
//     </InputContainer>
//   )
// }

// export { Input }; 
