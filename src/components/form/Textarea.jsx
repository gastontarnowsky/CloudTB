import { Error } from "../alert"


export const Textarea = ({
    handleChange,
    handleBlur,
    value,
    name,
    id,
    placeholder,
    error = '',
}) => {


    return (
        <>
            <textarea
                className='transition-all h-24 duration-300 bg-white border-b-2 border-azulOscuroInput mt-8 w-full py-2 px-2 outline-none focus:bg-azulOscuroFocus focus:rounded-lg'
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            ></textarea>
            {error && (
                <Error
                    error={error}
                />
            )}
        </>
    )
}