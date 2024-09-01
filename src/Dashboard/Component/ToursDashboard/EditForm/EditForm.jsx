import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { $editFormState } from '../../../../Store';
import { useIntl } from 'react-intl';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { AddFormValidationSchema } from '../AddForm/AddFormValidationSchema';
import { Error } from '../../../../Components/Error/Error';
import { Modal } from '../../../../Components/Modal/Modal';
import axios from 'axios'; // Import axios for fetching data
import './EditForm.scss';

export const EditForm = () => {
  const [editForm, setEditForm] = useRecoilState($editFormState);
  let intl = useIntl();
  let form = useRef();
  const [step, setStep] = useState(1);
  const [tourData, setTourData] = useState(null); // State to store fetched data
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (editForm) {
      // Fetch the tour data when the form is opened
      axios.get(`http://localhost:3000/allTours`)
        .then(response => setTourData(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [editForm]);

  if (!tourData) return null;
  // Don't render the form until data is fetched
  const handleSaveChanges = (values) => {
    const updatedTour = {
      ...tourData,
      en: {
        ...tourData.en,
        title: values.en.title,
        description: values.en.description,
        duration: values.en.duration,
        price: values.en.price,
        imageUrl: values.en.image ? URL.createObjectURL(values.en.image) : tourData.en.imageUrl,
      },
      ar: {
        ...tourData.ar,
        title: values.ar.title,
        description: values.ar.description,
        duration: values.ar.duration,
        price: values.ar.price,
        imageUrl: values.ar.image ? URL.createObjectURL(values.ar.image) : tourData.ar.imageUrl,
      },
    };

    axios.put(`http://localhost:3000/allTours`, updatedTour)
      .then(response => {
        console.log('Data updated successfully', response);
        setEditForm(false); // Close form on success
      })
      .catch(error => console.error('Error updating data:', error));
  };


  return (
    <Modal show={editForm} setEditForm={setEditForm} size={'md'}>
      <div id='editForm' className='editForm my-8'>
        <div>
          <Formik
            initialValues={{
              en: {
                image: tourData.en.imageUrl,
                title: tourData.en.title,
                description: tourData.en.description,
                duration: tourData.en.duration,
                price: tourData.en.price
              },
              ar: {
                image: tourData.ar.imageUrl,
                title: tourData.ar.title,
                description: tourData.ar.description,
                duration: tourData.ar.duration,
                price: tourData.ar.price
              }
            }}
            validationSchema={AddFormValidationSchema}
            innerRef={form}
            onSubmit={(values) => handleSaveChanges(values)} // Updated function
          >

            <Form className='eForm flex flex-col'>
              {step === 1 && (
                <>
                  <p>English</p>
                  {/* Form fields for English data */}
                  <div className='flex flex-col gap-3'>
                    <label className='font-medium dark:text-white'>Image Upload</label>
                    <Field name="en.image" type="file" className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                    <Error><ErrorMessage name="en.image" /></Error>
                  </div>

                  <div className='flex flex-col gap-3'>
                    <label className='font-medium dark:text-white'>Tour Title</label>
                    <Field name="en.title" type="text" className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                    <Error><ErrorMessage name="en.title" /></Error>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <label className='font-medium dark:text-white'>Description</label>
                    <Field name="en.description" as="textarea" className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                    <Error><ErrorMessage name="en.description" /></Error>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <label className='font-medium dark:text-white'>Duration</label>
                    <Field name="en.duration" type="text" className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                    <Error><ErrorMessage name="en.duration" /></Error>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <label className='font-medium dark:text-white'>Price</label>
                    <Field name="en.price" type="number" className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                    <Error><ErrorMessage name="en.price" /></Error>
                  </div>
                  <button type="button" onClick={() => setStep(2)} className='buttons py-3 w-[25%] self-end rounded-lg dark:!text-[#0c112b]'>Next</button>
                </>
              )}

              {step === 2 && (
                <>
                  <p>Arabic</p>
                  {/* Form fields for Arabic data */}
                  <div className='flex flex-col gap-3'>
                    <label className='font-medium dark:text-white'>Image Upload</label>
                    <Field name="ar.image" type="file" className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                    <Error><ErrorMessage name="ar.image" /></Error>
                  </div>

                  <div className='flex flex-col gap-3'>
                    <label className='font-medium dark:text-white'>Tour Title</label>
                    <Field name="ar.title" type="text" className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                    <Error><ErrorMessage name="ar.title" /></Error>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <label className='font-medium dark:text-white'>Description</label>
                    <Field name="ar.description" as="textarea" className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                    <Error><ErrorMessage name="ar.description" /></Error>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <label className='font-medium dark:text-white'>Duration</label>
                    <Field name="ar.duration" type="text" className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                    <Error><ErrorMessage name="ar.duration" /></Error>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <label className='font-medium dark:text-white'>Price</label>
                    <Field name="ar.price" type="number" className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
                    <Error><ErrorMessage name="ar.price" /></Error>
                  </div>
                  <div className='flex justify-between'>
                    <button type="button" onClick={() => setStep(1)} className='buttons py-3 w-[25%] rounded-lg dark:!text-[#0c112b]'>Back</button>
                    <button type="submit" className='py-3 w-[25%] rounded-lg dark:!text-[#0c112b]'>Submit</button>
                  </div>
                </>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    </Modal>
  );
};



// import React, { useEffect, useRef, useState } from 'react';
// import { useRecoilState } from 'recoil';
// import { $editFormState } from '../../../../Store';
// import { useIntl } from 'react-intl';
// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import { AddFormValidationSchema } from '../AddForm/AddFormValidationSchema';
// import { Error } from '../../../../Components/Error/Error';
// import { Modal } from '../../../../Components/Modal/Modal';
// import './EditForm.scss';
// export const EditForm = () => {
//   const [editForm, setEditForm] = useRecoilState($editFormState);
//   let intl = useIntl();
//   let form = useRef();
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <Modal show={editForm} setEditForm={setEditForm} size={'md'}>
//         <div id='editForm' className='editForm my-8'>
//           <div>
//             <Formik
//               initialValues={{
//                 image: null,
//                 title: '',
//                 description: '',
//                 duration: '',
//                 price: ''
//               }}
//               validationSchema={AddFormValidationSchema}
//               innerRef={form}
//               onSubmit={(values) => handleAddNewTour(values)}
//             >

//               <Form className=' eForm flex flex-col'>
//                 {step == 1 && (
//                   <>
//                     <p>English</p>
//                     <div className='flex flex-col gap-3'>
//                       <label className='font-medium dark:text-white'>Image Upload</label>
//                       <Field name="image" type="file" placeholder={intl.formatMessage({ id: "image" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
//                       <Error><ErrorMessage name="image" /></Error>
//                     </div>

//                     <div className='flex flex-col gap-3'>
//                       <label className='font-medium dark:text-white'>Tour Title</label>
//                       <Field name="title" type="text" placeholder={intl.formatMessage({ id: "title" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
//                       <Error><ErrorMessage name="title" /></Error>
//                     </div>
//                     <div className='flex flex-col gap-3'>
//                       <label className='font-medium dark:text-white'>Description</label>
//                       <Field name="description" as="textarea" placeholder={intl.formatMessage({ id: "description" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
//                       <Error><ErrorMessage name="description" /></Error>
//                     </div>
//                     <div className='flex flex-col gap-3'>
//                       <label className='font-medium dark:text-white'>Duration</label>
//                       <Field name="duration" type="text" placeholder={intl.formatMessage({ id: "duration" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
//                       <Error><ErrorMessage name="duration" /></Error>
//                     </div>
//                     <div className='flex flex-col gap-3'>
//                       <label className='font-medium dark:text-white'>Price</label>
//                       <Field name="price" type="number" placeholder={intl.formatMessage({ id: "price" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
//                       <Error><ErrorMessage name="price" /></Error>
//                     </div>
//                     <button type="button" onClick={() => setStep(2)} className='buttons py-3 w-[25%] self-end rounded-lg dark:!text-[#0c112b]'>Next</button>
//                   </>
//                 )}

//                 {step == 2 && (
//                   <>
//                     <p>Arabic</p>
//                     <div className='flex flex-col gap-3'>
//                       <label className='font-medium dark:text-white'>Image Upload</label>
//                       <Field name="image" type="file" placeholder={intl.formatMessage({ id: "image" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
//                       <Error><ErrorMessage name="image" /></Error>
//                     </div>

//                     <div className='flex flex-col gap-3'>
//                       <label className='font-medium dark:text-white'>Tour Title</label>
//                       <Field name="title" type="text" placeholder={intl.formatMessage({ id: "title" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
//                       <Error><ErrorMessage name="title" /></Error>
//                     </div>
//                     <div className='flex flex-col gap-3'>
//                       <label className='font-medium dark:text-white'>Description</label>
//                       <Field name="description" as="textarea" placeholder={intl.formatMessage({ id: "description" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
//                       <Error><ErrorMessage name="description" /></Error>
//                     </div>
//                     <div className='flex flex-col gap-3'>
//                       <label className='font-medium dark:text-white'>Duration</label>
//                       <Field name="duration" type="text" placeholder={intl.formatMessage({ id: "duration" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
//                       <Error><ErrorMessage name="duration" /></Error>
//                     </div>
//                     <div className='flex flex-col gap-3'>
//                       <label className='font-medium dark:text-white'>Price</label>
//                       <Field name="price" type="number" placeholder={intl.formatMessage({ id: "price" })} className="w-full px-3 py-4 border-0 rounded-lg bg-gray-100 dark:!bg-slate-800" />
//                       <Error><ErrorMessage name="price" /></Error>
//                     </div>
//                     <div className='flex justify-between'>
//                       <button type="button" onClick={() => setStep(1)} className='buttons py-3 w-[25%] rounded-lg dark:!text-[#0c112b]'>Back</button>
//                       <button type="submit" className='py-3 w-[25%] rounded-lg dark:!text-[#0c112b]'>Submit</button>
//                     </div>
//                   </>
//                 )}

//               </Form>

//             </Formik>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );


// };


