// import React, { useState } from "react";

// const UploadForm = () => {
//   const [file, setFile] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (file) {
//       alert(`Uploaded: ${file.name}`);
//     }
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-xl">
//       <h1 className="text-2xl font-bold text-indigo-600 mb-4">Upload Document</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="file"
//           accept=".pdf,.png,.jpg"
//           onChange={(e) => setFile(e.target.files[0])}
//           className="block w-full border border-gray-300 p-2 rounded"
//         />
//         <button
//           type="submit"
//           className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
//         >
//           Upload
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UploadForm;









import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const validTypes = ["application/pdf", "image/png", "image/jpeg"];
      if (!validTypes.includes(selectedFile.type)) {
        alert("Invalid file type. Please upload a PDF, PNG, or JPG file.");
        return;
      }
      if (selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
        alert("File size exceeds 5MB. Please upload a smaller file.");
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      setMessage("Uploading...");
      // Simulate upload logic
      setTimeout(() => {
        setMessage("File uploaded successfully!");
        setFile(null); // Reset file state
        e.target.reset(); // Reset form
      }, 2000);
    } else {
      setMessage("Please select a file to upload.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-indigo-600 mb-4">Upload Document</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept=".pdf,.png,.jpg"
          onChange={handleFileChange}
          className="block w-full border border-gray-300 p-2 rounded"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Upload
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
    </div>
  );
};

export default UploadForm;