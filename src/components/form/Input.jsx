import { Error } from "../alert";


export const Input = ({
    handleChange,
    handleBlur,
    value,
    name,
    id,
    placeholder,
    type = 'text',
    error,
}) => {


    return (
        <>
            <input 
                className={`transition-all duration-300 bg-white border-b-2 ${error ? 'border-rojo' : 'border-azulOscuroInput'} mt-8 w-full py-2 px-2 outline-none focus:bg-azulOscuroFocus text-black focus:rounded-lg`}
                id={id}
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {error && (
                <Error 
                    error={error}
                />
            )}
        </>
    );
}