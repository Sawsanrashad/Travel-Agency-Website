import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { $editFormState } from '../../../../Store';

export const EditForm = () => {
  const [editForm, setEditForm] = useRecoilState($editFormState);

  function closeEditForm(e) {
    if (!e.target.closest(".editForm")) {
      setEditForm(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", closeEditForm);
    return () => {
      document.removeEventListener("click", closeEditForm);
    };
  }, []);

  if (editForm) {
    return (
      <div id='editForm' className='bg-black w-full h-full flex justify-center top-0 items-center editForm z-10'>
        <div className='bg-white border w-[50%] h-[500px] fixed top-[10%] right-[20%] z-10'>
          {/* Your form content here */}
          <h2>Edit Form</h2>
        </div>
      </div>
    );
  }

};



// import React, { useEffect } from 'react'
// import { useRecoilState } from 'recoil';
// import { $editFormState } from '../../../../Store';

// export const EditForm = () => {
//   const [editForm, setEditForm] = useRecoilState($editFormState);
//   function closeEditForm(e) {
//     if (!e.target.closest(".editForm")) {
//       setEditForm(false);
//     }
//   }

//   useEffect(() => {
//     document.addEventListener("click", closeEditForm);
//   }, []);

//   if (editForm == true) {
//     return (
//       <div id='editForm' className='bg-white w-[50%] h-[500px] fixed top-0 editForm '>
//         <div className=''>

//         </div>

//       </div>
//     )
//   }
// }
