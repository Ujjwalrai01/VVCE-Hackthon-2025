// import React, { useState } from 'react';
// import { Pencil, Trash2, Check, X } from 'lucide-react';

// const EditDeleteForm = ({ forms, onEdit, onDelete }) => {
//   const [editingId, setEditingId] = useState(null);
//   const [confirmingDeleteId, setConfirmingDeleteId] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [errors, setErrors] = useState({});

//   // Handle edit action
//   const handleEditClick = (form) => {
//     setEditingId(form.id);
//     setFormData({
//       id: form.id,
//       name: form.name,
//       email: form.email,
//       message: form.message,
//       // Add more fields as needed
//     });
//     setErrors({});
//   };

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Form validation
//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = 'Required';
//     if (!formData.email) {
//       newErrors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
//       newErrors.email = 'Invalid email address';
//     }
//     if (!formData.message) newErrors.message = 'Required';
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       onEdit(formData);
//       setEditingId(null);
//     }
//   };

//   // Handle delete confirmation
//   const handleDeleteClick = (formId) => {
//     setConfirmingDeleteId(formId);
//   };

//   // Handle delete confirmation cancel
//   const handleCancelDelete = () => {
//     setConfirmingDeleteId(null);
//   };

//   // Handle delete confirmation
//   const handleConfirmDelete = (formId) => {
//     onDelete(formId);
//     setConfirmingDeleteId(null);
//   };

//   return (
//     <div className="space-y-4">
//       {forms?.map((form) => (
//         <div key={form.id} className="border rounded-lg p-4 bg-white shadow-sm">
//           {editingId === form.id ? (
//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name || ''}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
//                 />
//                 {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
//               </div>
              
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email || ''}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
//                 />
//                 {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
//               </div>
              
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="3"
//                   value={formData.message || ''}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
//                 />
//                 {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
//               </div>
              
//               <div className="flex justify-end space-x-2">
//                 <button
//                   type="button"
//                   onClick={() => setEditingId(null)}
//                   className="px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleSubmit}
//                   className="px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <div className="flex justify-between items-start">
//                 <div className="flex-grow">
//                   <h3 className="text-lg font-medium text-gray-900">{form.name}</h3>
//                   <p className="text-sm text-gray-500">{form.email}</p>
//                   <p className="mt-1 text-gray-700">{form.message}</p>
//                 </div>
                
//                 <div className="flex space-x-2">
//                   {confirmingDeleteId === form.id ? (
//                     <div className="flex items-center space-x-2">
//                       <button
//                         onClick={() => handleConfirmDelete(form.id)}
//                         className="p-1 rounded-md bg-red-500 hover:bg-red-600 text-white"
//                         title="Confirm delete"
//                       >
//                         <Check size={16} />
//                       </button>
//                       <button
//                         onClick={handleCancelDelete}
//                         className="p-1 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
//                         title="Cancel"
//                       >
//                         <X size={16} />
//                       </button>
//                     </div>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => handleEditClick(form)}
//                         className="p-1 rounded-md bg-blue-100 hover:bg-blue-200 text-blue-600"
//                         title="Edit form"
//                       >
//                         <Pencil size={16} />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteClick(form.id)}
//                         className="p-1 rounded-md bg-red-100 hover:bg-red-200 text-red-600"
//                         title="Delete form"
//                       >
//                         <Trash2 size={16} />
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
//                   Unapproved
//                 </span>
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EditDeleteForm;