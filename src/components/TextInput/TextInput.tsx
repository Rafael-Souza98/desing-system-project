import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';




export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{};

export interface TextInputRootProps{
    children: ReactNode;
};

export interface TextInputIconProps{
    children: ReactNode;
};

function TextInputRoot({children}: TextInputRootProps){
    return(
        <div className="flex items-center gap-3 py-3 h-12 px-4 rounded  w-full bg-gray-800  focus-within:ring-2 ring-green-200">{children} </div>
    );
};

function TextInputIcon({children}: TextInputIconProps){
   return ( 
   
        <Slot className='w-6 h-6 text-gray-400'>
             {children}
        </Slot>)

}

export function TextInputInput(props: TextInputInputProps){

  return (
        <input {...props}className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400 "/> 

  );
};

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}