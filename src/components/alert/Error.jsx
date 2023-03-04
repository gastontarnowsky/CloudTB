

export const Error = ({
    error = ''
}) => {

    return (
        <div className='mt-0.5'>
            <p className='text-rojo font-bold pl-2 text-xs sm:text-sm tracking-wide'>{error}</p>
        </div>
    );
}