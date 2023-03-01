import { useContext } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import { UIContext } from '../contexts';
import { IconEmail } from './icons';
import { Input, Textarea } from './form';

export const Modal = () => {

    const { handleModal, modal } = useContext(UIContext);

    const validSchema = yup.object().shape({
        fullname: yup.string().required('Debe completar este campo').min(3, 'El valor ingresado es muy corto'),
        email: yup.string().email('El correo ingresado no tiene un formato válido').required('Debe completar este campo'),
        description: yup.string().min(30, 'La descripción debe tener al menos 30 caracteres').required('Debe completar este campo')
    })
{/*}
    const handleSubmit = async (values, resetForm) => {
        
    }  */}
    return (
        <section
            className={`fixed bottom-0 left-0 z-50 flex flex-col items-center justify-center w-full h-screen hover:cursor-pointer
                ${modal ? 'animate-showModal' : 'animate-hiddenModal'}`}
            onClick={handleModal}
        >
            <div className={`inset-0 bg-gray-900 bg-opacity-75 h-full w-full`}></div>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`fixed z-60 w-11/12 sm:max-w-lg bg-white hover:cursor-default rounded-lg px-4 md:px-8 py-4 md:py-8`}
            >
                <div className='flex flex-col sm:flex-row'>
                    <div className='sm:w-1/4 mx-auto'>
                        <IconEmail />
                    </div>
                    <Formik
                        initialValues={{
                            fullname: '',
                            email: '',
                            phone: '',
                            description: '',
                        }}
                        validationSchema={validSchema}
                        onSubmit={async (values, resetForm) => handleSubmit(values, resetForm)}
                        enableReinitialize={true}
                    >
                        {({ errors, touched, handleChange, handleBlur, values }) => (
                            <Form
                                noValidate
                                className={`w-full mt-4`}
                            >
                                <fieldset>
                                    <legend className='text-black text-lg md:text-xl font-medium tracking-wide'>
                                        ¿En qué te podemos ayudar?
                                    </legend>
                                    <Input
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        value={values.fullname}
                                        name={'fullname'}
                                        id={'fullname'}
                                        placeholder={'Nombre Completo (*)'}
                                        error={(errors.fullname && touched.fullname) ? errors.fullname : ''}
                                    />
                                    <Input
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        value={values.email}
                                        name={'email'}
                                        id={'email'}
                                        placeholder={'E-mail (*)'}
                                        error={(errors.email && touched.email) ? errors.email : ''}
                                    />
                                    <Input
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        value={values.phone}
                                        name={'phone'}
                                        id={'phone'}
                                        type={'tel'}
                                        placeholder={'N° de teléfono'}
                                    />
                                    <Textarea
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        value={values.description}
                                        name={'description'}
                                        id={'description'}
                                        placeholder={'Describe brevemente tu idea o proyecto (*)'}
                                        error={(errors.description && touched.description) ? errors.description : ''}
                                    />
                                </fieldset>
                                <button
                                    type='submit'
                                    className='mt-8 py-2.5 rounded-lg w-full text-center font-bold text-indigo-400 hover:text-white bg-white hover:bg-indigo-600 transition-all duration-300 border-2 border-indigo-400 hover:border-indigo-600'
                                >
                                    Enviar
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>

            </div>
        </section>
    )
}
