import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import {
  Upload,
  Camera,
  FileText,
  Check,
  AlertCircle,
  ChevronRight,
  Loader,
  RefreshCw,
  Eye,
  EyeOff,
  Copy,
  IdCard,
  UserCheck,
  MapPin,
  Calendar,
  X,
  MessageSquare
} from 'lucide-react';

const UploadForm = () => {
  // console.log("UploadForm component rendered");
  // State for managing the upload process
  const [step, setStep] = useState(1); // 1: Upload, 2: Processing, 3: Results
  const [uploadMethod, setUploadMethod] = useState('upload'); // 'upload' or 'camera'
  const [idType, setIdType] = useState('aadhar'); // Default to Aadhar card for India
  const [uploadedImage, setUploadedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [ocrData, setOcrData] = useState(null);
  const [showFullOcr, setShowFullOcr] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [validationStatus, setValidationStatus] = useState({
    name: null,
    idNumber: null,
    dob: null,
    address: null,
    overall: null
  });
  const [showLivenessCheck, setShowLivenessCheck] = useState(false);
  const [livenessScore, setLivenessScore] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('Please upload a valid ID document');
  const [verificationScore, setVerificationScore] = useState(null);
  const webcamRef = useRef(null);

  // References
  const fileInputRef = useRef(null);
  const cameraRef = useRef(null);
  const canvasRef = useRef(null);

  // Sample OCR data structure (would come from backend in real app)
  const mockOcrData = {
    name: "Ujjwal Rai",
    idNumber: "1234 5678 9012",
    dob: "09/03/2005",
    gender: "Male",
    address: "Village Lagunaha, Post Pokhariya Rai, District Bettiah, Bihar - 845449",
    fatherName: "Karishna Rai",
    issuedDate: "23/06/2015",
    validUntil: "22/06/2025",
    rawText: "Government of India\nAadhaar Card\nUID: 1234 5678 9012\nName: Ujjwal Rai\nDOB: 15/08/1985\nGender: Male\nAddress: Village Lagunaha, Post Pokhariya Rai, District Bettiah, Bihar - 845449 - 221204\nFather's Name: Karishna Rai\nIssued Date: 23/06/2015\nValid Until: 22/06/2025"
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check if file is an image
    if (!file.type.match('image.*')) {
      setError('Please upload an image file (JPEG, PNG)');
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File is too large. Please upload an image smaller than 5MB');
      return;
    }

    setError(null);
    setUploadedImage(file);
    
    // Create object URL for preview
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    
    // Move to next step automatically
    startProcessing();
  };

  // Simulate camera capture
  // const handleCameraCapture = () => {
  //   if (!cameraRef.current) return;
    
  //   setMessage("Taking photo...");


  
    
    // Simulate capturing by using a timeout
  //   setTimeout(() => {
  //     // In a real implementation, we would capture from the video stream
  //     // Here we're just simulating with a mock result
  //     setPreviewUrl('/api/placeholder/300/180'); // Placeholder image
  //     setUploadedImage({name: 'camera-capture.jpg'});
  //     setMessage("Photo captured!");
      
  //     // Move to next step automatically
  //     startProcessing();
  //   }, 1000);
  // };




  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      setPreviewUrl(imageSrc);
      setUploadedImage({ name: 'webcam-capture.jpg' });
      setMessage('Photo captured!');
      startProcessing();
    }
  };




  // Start processing the uploaded image
  const startProcessing = () => {
    setStep(2);
    setIsProcessing(true);
    setMessage("Processing your ID document...");
    
    // Simulate upload progress
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += 5;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(progressInterval);
        simulateOcrExtraction();
      }
    }, 120);
  };

  // Simulate OCR text extraction
  const simulateOcrExtraction = () => {
    setTimeout(() => {
      setOcrData(mockOcrData);
      setMessage("Validating extracted information...");
      
      // Simulate validation checks
      setTimeout(() => {
        // Simulate validation results
        setValidationStatus({
          name: true,
          idNumber: true,
          dob: true,
          address: true,
          overall: true
        });
        
        setVerificationScore(92);
        setLivenessScore(87);
        
        setIsProcessing(false);
        setStep(3);
        setMessage("ID verification successful!");
      }, 1500);
    }, 2000);
  };

  // Reset the form
  const handleReset = () => {
    setStep(1);
    setUploadedImage(null);
    setPreviewUrl(null);
    setOcrData(null);
    setIsProcessing(false);
    setUploadProgress(0);
    setValidationStatus({
      name: null,
      idNumber: null,
      dob: null,
      address: null,
      overall: null
    });
    setShowLivenessCheck(false);
    setLivenessScore(null);
    setError(null);
    setMessage('Please upload a valid ID document');
    setVerificationScore(null);
    
    // Clear the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Toggle full OCR text visibility
  const toggleFullOcr = () => {
    setShowFullOcr(!showFullOcr);
  };

  // Copy OCR text to clipboard
  const copyOcrToClipboard = () => {
    if (!ocrData) return;
    
    navigator.clipboard.writeText(ocrData.rawText).then(
      () => {
        // Show a temporary message
        const originalMessage = message;
        setMessage("OCR text copied to clipboard!");
        setTimeout(() => setMessage(originalMessage), 2000);
      },
      () => {
        setError("Failed to copy text. Please try again.");
      }
    );
  };

  // Toggle liveness check
  const toggleLivenessCheck = () => {
    setShowLivenessCheck(!showLivenessCheck);
  };

  // Render functions for different steps
  const renderUploadStep = () => (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">Upload ID Document</h2>
        <p className="text-center text-gray-600">
          Please upload a clear image of your government-issued ID
        </p>
      </div>
      
      {/* ID Type Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select ID Type</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {['aadhar', 'pan', 'voter', 'driving'].map((type) => (
            <button
              key={type}
              onClick={() => setIdType(type)}
              className={`flex items-center justify-center px-4 py-3 border rounded-lg text-gray-600 ${
                idType === type
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700 text-gray-600'
                  : 'border-gray-300 hover:bg-gray-50 text-gray-600'
              }`}
            >
              <IdCard size={18} className="mr-2 text-gray-600" />
              <span className="capitalize text-gray-600">{type === 'aadhar' ? 'Aadhaar' : type} Card</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Upload Method Tabs */}
      <div className="bg-gray-100 rounded-lg p-1 flex mb-6 text-gray-600">
        <button
          onClick={() => setUploadMethod('upload')}
          className={`flex-1 py-2 rounded-md flex items-center justify-center text-gray-600 ${
            uploadMethod === 'upload' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
          }`}
        >
          <Upload size={18} className="mr-2 text-gray-600" />
          <span>Upload File</span>
        </button>
        <button
          onClick={() => setUploadMethod('camera')}
          className={`flex-1 py-2 rounded-md flex items-center justify-center text-gray-600 ${
            uploadMethod === 'camera' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
          }`}
        >
          <Camera size={18} className="mr-2" />
          <span>Use Camera</span>
        </button>
      </div>
      
      {/* Upload Area or Camera View */}
      {uploadMethod === 'upload' ? (
        <div 
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            className="hidden"
          />
          <div className="mb-4 bg-indigo-100 p-4 rounded-full">
            <Upload size={32} className="text-indigo-600" />
          </div>
          <p className="mb-2 text-sm font-medium text-gray-700">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
        </div>
      ) : (
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-black">
          <div className="relative h-48 bg-gray-200 flex items-center justify-center">
            {/* In a real implementation, this would be a video stream */}
            <div className="text-center px-4">
              <Camera size={48} className="mx-auto mb-2 text-gray-500" />
              <p className="text-sm text-gray-600">Camera preview would appear here</p>
            </div>
            
            {/* Camera guide overlay */}
            <div className="absolute inset-0 border-2 border-dashed border-white opacity-70 m-8 rounded-md pointer-events-none"></div>
          </div>
          
          <div className="bg-gray-800 p-3 flex justify-center">
            <button
              onClick={handleCameraCapture}
              className="bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
            >
              <Camera size={24} />
            </button>
          </div>
        </div>
      )}
      
      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center text-red-700">
          <AlertCircle size={18} className="mr-2 flex-shrink-0" />
          <span className="text-sm">{error}</span>
        </div>
      )}
      
      {/* Tips */}
      <div className="bg-yellow-50 border border-yellow-100 rounded-md p-4 mt-6">
        <h3 className="font-medium text-yellow-800 mb-2 flex items-center">
          <MessageSquare size={16} className="mr-2" />
          Tips for Best Results
        </h3>
        <ul className="text-sm text-yellow-700 space-y-1 ml-5 list-disc">
          <li>Ensure the ID document is fully visible in the frame</li>
          <li>Avoid glare and shadows on the document</li>
          <li>Make sure all text is clearly legible</li>
          <li>For Aadhaar, both front and back sides are recommended</li>
        </ul>
      </div>
    </div>
  );

  const renderProcessingStep = () => (
    <div className="space-y-6">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Processing Your ID</h2>
        <p className="text-gray-600">{message}</p>
      </div>
      
      {/* Preview & Progress */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Preview */}
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-700 mb-2">Document Preview</p>
          <div className="relative rounded-lg overflow-hidden border border-gray-300 bg-gray-100 h-48 flex items-center justify-center">
            {previewUrl ? (
              <img 
                src={previewUrl} 
                alt="ID Preview" 
                className="object-contain h-full w-full"
              />
            ) : (
              <div className="text-gray-400">No preview available</div>
            )}
          </div>
        </div>
        
        {/* Processing Status */}
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-700 mb-2">Processing Status</p>
          <div className="space-y-4 bg-white rounded-lg border border-gray-200 p-4">
            {/* Upload Progress */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Uploading document</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                  style={{width: `${uploadProgress}%`}}
                ></div>
              </div>
            </div>
            
            {/* OCR Extraction Status */}
            <div className="flex items-center">
              {uploadProgress === 100 ? (
                ocrData ? (
                  <Check size={16} className="text-green-500 mr-2" />
                ) : (
                  <Loader size={16} className="text-indigo-500 mr-2 animate-spin" />
                )
              ) : (
                <div className="w-4 h-4 mr-2"></div>
              )}
              <span className="text-sm">Extracting text with OCR</span>
            </div>
            
            {/* Validation Status */}
            <div className="flex items-center">
              {ocrData ? (
                validationStatus.overall !== null ? (
                  validationStatus.overall ? (
                    <Check size={16} className="text-green-500 mr-2" />
                  ) : (
                    <AlertCircle size={16} className="text-red-500 mr-2" />
                  )
                ) : (
                  <Loader size={16} className="text-indigo-500 mr-2 animate-spin" />
                )
              ) : (
                <div className="w-4 h-4 mr-2"></div>
              )}
              <span className="text-sm">Validating document information</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cancel Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleReset}
          className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          <X size={16} className="mr-2" />
          Cancel
        </button>
      </div>
    </div>
  );

  const renderResultsStep = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Verification Results</h2>
        {/* Score Display */}
        {verificationScore !== null && (
          <div className="flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-1">
            <div className="mr-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
              {verificationScore}
            </div>
            <span className="text-green-700 font-medium">Verification Score</span>
          </div>
        )}
      </div>
      
      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ID Document Image */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">ID Document</p>
          <div className="relative border border-gray-300 rounded-lg overflow-hidden bg-gray-100">
            {previewUrl && (
              <img 
                src={previewUrl} 
                alt="ID Document" 
                className="w-full object-contain h-48"
              />
            )}
          </div>
          
          {/* Liveness Check */}
          <div className="mt-4">
            <button
              onClick={toggleLivenessCheck}
              className="w-full flex items-center justify-between px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-md text-indigo-700 hover:bg-indigo-100"
            >
              <div className="flex items-center">
                <UserCheck size={18} className="mr-2" />
                <span>Liveness Check Results</span>
              </div>
              <ChevronRight size={18} className={`transform transition-transform ${showLivenessCheck ? 'rotate-90' : ''}`} />
            </button>
            
            {showLivenessCheck && (
              <div className="mt-3 p-4 bg-white border border-gray-200 rounded-md">
                <div className="flex items-center mb-3">
                  <div className="mr-3 bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center font-medium">
                    {livenessScore}%
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Genuine Person Detected</p>
                    <p className="text-sm text-gray-600">No signs of spoofing detected</p>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  Liveness check helps ensure the person is physically present during verification
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Extracted Information */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium text-gray-700">Extracted Information</p>
            <div className="flex space-x-2">
              <button
                onClick={copyOcrToClipboard}
                className="p-1 text-gray-500 hover:text-gray-700"
                title="Copy all text"
              >
                <Copy size={16} />
              </button>
              <button
                onClick={toggleFullOcr}
                className="p-1 text-gray-500 hover:text-gray-700"
                title={showFullOcr ? "Show less" : "Show all text"}
              >
                {showFullOcr ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          
          {/* Extracted Fields */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <dl className="divide-y divide-gray-200">
              {ocrData && (
                <>
                  <div className="px-4 py-3 sm:grid sm:grid-cols-5 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500 flex items-center">
                      <UserCheck size={14} className="mr-1" /> Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-4 flex items-center">
                      {ocrData.name}
                      {validationStatus.name && (
                        <Check size={16} className="ml-2 text-green-500" />
                      )}
                    </dd>
                  </div>
                  
                  <div className="px-4 py-3 sm:grid sm:grid-cols-5 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500 flex items-center">
                      <IdCard size={14} className="mr-1" /> ID Number
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-4 flex items-center">
                      {ocrData.idNumber}
                      {validationStatus.idNumber && (
                        <Check size={16} className="ml-2 text-green-500" />
                      )}
                    </dd>
                  </div>
                  
                  <div className="px-4 py-3 sm:grid sm:grid-cols-5 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500 flex items-center">
                      <Calendar size={14} className="mr-1" /> Date of Birth
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-4 flex items-center">
                      {ocrData.dob}
                      {validationStatus.dob && (
                        <Check size={16} className="ml-2 text-green-500" />
                      )}
                    </dd>
                  </div>
                  
                  <div className="px-4 py-3 sm:grid sm:grid-cols-5 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500 flex items-center">
                      <MapPin size={14} className="mr-1" /> Address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-4 flex items-center">
                      <span className="break-words">{ocrData.address}</span>
                      {validationStatus.address && (
                        <Check size={16} className="ml-2 flex-shrink-0 text-green-500" />
                      )}
                    </dd>
                  </div>
                </>
              )}
            </dl>
          </div>
          
          {/* Full OCR Text */}
          {showFullOcr && ocrData && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Raw OCR Text</p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 h-48 overflow-y-auto">
                <pre className="text-xs text-gray-700 whitespace-pre-wrap">{ocrData.rawText}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
        <button
          onClick={handleReset}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          <RefreshCw size={16} className="mr-2" />
          Upload New Document
        </button>
        
        <button
          className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          <Check size={16} className="mr-2" />
          Confirm & Continue
        </button>
      </div>
    </div>
  );

  // Main render
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Digital Identity Verification</h1>
          <p className="opacity-90">
            Secure verification for rural banking services
          </p>
        </div>

        {/* Progress Steps */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 py-4 px-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              1
            </div>
            <div className={`flex-1 h-1 mx-2 ${
              step > 1 ? 'bg-indigo-600' : 'bg-gray-200'
            }`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              2
            </div>
            <div className={`flex-1 h-1 mx-2 ${
              step > 2 ? 'bg-indigo-600' : 'bg-gray-200'
            }`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              3
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
            <span>Upload ID</span>
            <span>Processing</span>
            <span>Verification</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && renderUploadStep()}
          {step === 2 && renderProcessingStep()}
          {step === 3 && renderResultsStep()}
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
























// import React, { useState, useRef } from 'react';
// import Webcam from 'react-webcam';
// import {
//   Upload,
//   Camera,
//   Check,
//   AlertCircle,
//   RefreshCw,
//   Eye,
//   EyeOff,
//   Copy,
//   IdCard,
//   UserCheck,
//   MapPin,
//   Calendar,
//   ChevronRight,
//   Loader,
//   X,
//   MessageSquare,
// } from 'lucide-react';

// const UploadForm = () => {
//   const [step, setStep] = useState(1); // 1: Upload, 2: Processing, 3: Results
//   const [uploadMethod, setUploadMethod] = useState('upload'); // 'upload' or 'camera'
//   const [idType, setIdType] = useState('aadhar'); // Default to Aadhar card
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [ocrData, setOcrData] = useState(null);
//   const [showFullOcr, setShowFullOcr] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [validationStatus, setValidationStatus] = useState({
//     name: null,
//     idNumber: null,
//     dob: null,
//     address: null,
//     overall: null,
//   });
//   const [showLivenessCheck, setShowLivenessCheck] = useState(false);
//   const [livenessScore, setLivenessScore] = useState(null);
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState('Please upload a valid ID document');
//   const [verificationScore, setVerificationScore] = useState(null);
//   const webcamRef = useRef(null);

//   const fileInputRef = useRef(null);

//   const mockOcrData = {
//     name: 'Ujjwal Rai',
//     idNumber: '1234 5678 9012',
//     dob: '09/03/2005',
//     address: 'Village Lagunaha, Post Pokhariya Rai, District Bettiah, Bihar - 845449',
//     rawText: 'Sample OCR data',
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     if (!file.type.match('image.*')) {
//       setError('Please upload an image file (JPEG, PNG)');
//       return;
//     }

//     if (file.size > 5 * 1024 * 1024) {
//       setError('File is too large. Please upload an image smaller than 5MB');
//       return;
//     }

//     setError(null);
//     setUploadedImage(file);
//     const objectUrl = URL.createObjectURL(file);
//     setPreviewUrl(objectUrl);
//     startProcessing();
//   };

//   const handleCapture = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     if (imageSrc) {
//       setPreviewUrl(imageSrc);
//       setUploadedImage({ name: 'webcam-capture.jpg' });
//       setMessage('Photo captured!');
//       startProcessing();
//     }
//   };

//   const startProcessing = () => {
//     setStep(2);
//     setIsProcessing(true);
//     setMessage('Processing your ID document...');
//     let progress = 0;
//     const progressInterval = setInterval(() => {
//       progress += 5;
//       setUploadProgress(progress);
//       if (progress >= 100) {
//         clearInterval(progressInterval);
//         simulateOcrExtraction();
//       }
//     }, 120);
//   };

//   const simulateOcrExtraction = () => {
//     setTimeout(() => {
//       setOcrData(mockOcrData);
//       setMessage('Validating extracted information...');
//       setTimeout(() => {
//         setValidationStatus({
//           name: true,
//           idNumber: true,
//           dob: true,
//           address: true,
//           overall: true,
//         });
//         setVerificationScore(92);
//         setLivenessScore(87);
//         setIsProcessing(false);
//         setStep(3);
//         setMessage('ID verification successful!');
//       }, 1500);
//     }, 2000);
//   };

//   const handleReset = () => {
//     setStep(1);
//     setUploadedImage(null);
//     setPreviewUrl(null);
//     setOcrData(null);
//     setIsProcessing(false);
//     setUploadProgress(0);
//     setValidationStatus({
//       name: null,
//       idNumber: null,
//       dob: null,
//       address: null,
//       overall: null,
//     });
//     setShowLivenessCheck(false);
//     setLivenessScore(null);
//     setError(null);
//     setMessage('Please upload a valid ID document');
//     setVerificationScore(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   const renderUploadStep = () => (
//     <div className="space-y-6">
//       <div className="bg-gray-100 rounded-lg p-1 flex mb-6 text-gray-600">
//         <button
//           onClick={() => setUploadMethod('upload')}
//           className={`flex-1 py-2 rounded-md flex items-center justify-center text-gray-600 ${
//             uploadMethod === 'upload' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
//           }`}
//         >
//           <Upload size={18} className="mr-2 text-gray-600" />
//           <span>Upload File</span>
//         </button>
//         <button
//           onClick={() => setUploadMethod('camera')}
//           className={`flex-1 py-2 rounded-md flex items-center justify-center text-gray-600 ${
//             uploadMethod === 'camera' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
//           }`}
//         >
//           <Camera size={18} className="mr-2" />
//           <span>Use Camera</span>
//         </button>
//       </div>

//       {uploadMethod === 'upload' ? (
//         <div
//           className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
//           onClick={() => fileInputRef.current.click()}
//         >
//           <input
//             type="file"
//             ref={fileInputRef}
//             onChange={handleFileUpload}
//             accept="image/*"
//             className="hidden"
//           />
//           <div className="mb-4 bg-indigo-100 p-4 rounded-full">
//             <Upload size={32} className="text-indigo-600" />
//           </div>
//           <p className="mb-2 text-sm font-medium text-gray-700">Click to upload or drag and drop</p>
//           <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
//         </div>
//       ) : (
//         <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-black">
//           <Webcam
//             audio={false}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             className="w-full h-48 object-cover"
//           />
//           <div className="bg-gray-800 p-3 flex justify-center">
//             <button
//               onClick={handleCapture}
//               className="bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
//             >
//               <Camera size={24} />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   const renderProcessingStep = () => (
//     <div className="space-y-6">
//       <div className="mb-6 text-center">
//         <h2 className="text-xl font-semibold text-gray-800 mb-2">Processing Your ID</h2>
//         <p className="text-gray-600">{message}</p>
//       </div>
//       <div className="flex justify-center mt-4">
//         <button
//           onClick={handleReset}
//           className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//         >
//           <X size={16} className="mr-2" />
//           Cancel
//         </button>
//       </div>
//     </div>
//   );

//   const renderResultsStep = () => (
//     <div className="space-y-6">
//       <h2 className="text-xl font-semibold text-gray-800">Verification Results</h2>
//       <div className="flex justify-center mt-4">
//         <button
//           onClick={handleReset}
//           className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//         >
//           <RefreshCw size={16} className="mr-2" />
//           Upload New Document
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8">
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
//         <div className="p-6">
//           {step === 1 && renderUploadStep()}
//           {step === 2 && renderProcessingStep()}
//           {step === 3 && renderResultsStep()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UploadForm;







// import React, { useState, useRef } from 'react';
// import Webcam from 'react-webcam';
// import {
//   Upload,
//   Camera,
//   Check,
//   AlertCircle,
//   RefreshCw,
//   Eye,
//   EyeOff,
//   Copy,
//   IdCard,
//   UserCheck,
//   MapPin,
//   Calendar,
//   ChevronRight,
//   Loader,
//   X,
//   MessageSquare,
// } from 'lucide-react';

// const UploadForm = () => {
//   const [step, setStep] = useState(1); // 1: Upload, 2: Processing, 3: Results
//   const [uploadMethod, setUploadMethod] = useState('upload'); // 'upload' or 'camera'
//   const [idType, setIdType] = useState('aadhar'); // Default to Aadhar card
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [ocrData, setOcrData] = useState(null);
//   const [showFullOcr, setShowFullOcr] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [validationStatus, setValidationStatus] = useState({
//     name: null,
//     idNumber: null,
//     dob: null,
//     address: null,
//     overall: null,
//   });
//   const [showLivenessCheck, setShowLivenessCheck] = useState(false);
//   const [livenessScore, setLivenessScore] = useState(null);
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState('Please upload a valid ID document');
//   const [verificationScore, setVerificationScore] = useState(null);
//   const webcamRef = useRef(null);

//   const fileInputRef = useRef(null);

//   const mockOcrData = {
//     name: 'Ujjwal Rai',
//     idNumber: '1234 5678 9012',
//     dob: '09/03/2005',
//     address: 'Village Lagunaha, Post Pokhariya Rai, District Bettiah, Bihar - 845449',
//     rawText: 'Sample OCR data',
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     if (!file.type.match('image.*')) {
//       setError('Please upload an image file (JPEG, PNG)');
//       return;
//     }

//     if (file.size > 5 * 1024 * 1024) {
//       setError('File is too large. Please upload an image smaller than 5MB');
//       return;
//     }

//     setError(null);
//     setUploadedImage(file);
//     const objectUrl = URL.createObjectURL(file);
//     setPreviewUrl(objectUrl);
//     startProcessing();
//   };

//   const handleCapture = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     if (imageSrc) {
//       setPreviewUrl(imageSrc);
//       setUploadedImage({ name: 'webcam-capture.jpg' });
//       setMessage('Photo captured!');
//       startProcessing();
//     }
//   };

//   const startProcessing = () => {
//     setStep(2);
//     setIsProcessing(true);
//     setMessage('Processing your ID document...');
//     let progress = 0;
//     const progressInterval = setInterval(() => {
//       progress += 5;
//       setUploadProgress(progress);
//       if (progress >= 100) {
//         clearInterval(progressInterval);
//         simulateOcrExtraction();
//       }
//     }, 120);
//   };

//   const simulateOcrExtraction = () => {
//     setTimeout(() => {
//       setOcrData(mockOcrData);
//       setMessage('Validating extracted information...');
//       setTimeout(() => {
//         setValidationStatus({
//           name: true,
//           idNumber: true,
//           dob: true,
//           address: true,
//           overall: true,
//         });
//         setVerificationScore(92);
//         setLivenessScore(87);
//         setIsProcessing(false);
//         setStep(3);
//         setMessage('ID verification successful!');
//       }, 1500);
//     }, 2000);
//   };

//   const handleReset = () => {
//     setStep(1);
//     setUploadedImage(null);
//     setPreviewUrl(null);
//     setOcrData(null);
//     setIsProcessing(false);
//     setUploadProgress(0);
//     setValidationStatus({
//       name: null,
//       idNumber: null,
//       dob: null,
//       address: null,
//       overall: null,
//     });
//     setShowLivenessCheck(false);
//     setLivenessScore(null);
//     setError(null);
//     setMessage('Please upload a valid ID document');
//     setVerificationScore(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   const renderUploadStep = () => (
//     <div className="space-y-6">
//       <div className="bg-gray-100 rounded-lg p-1 flex mb-6 text-gray-600">
//         <button
//           onClick={() => setUploadMethod('upload')}
//           className={`flex-1 py-2 rounded-md flex items-center justify-center text-gray-600 ${
//             uploadMethod === 'upload' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
//           }`}
//         >
//           <Upload size={18} className="mr-2 text-gray-600" />
//           <span>Upload File</span>
//         </button>
//         <button
//           onClick={() => setUploadMethod('camera')}
//           className={`flex-1 py-2 rounded-md flex items-center justify-center text-gray-600 ${
//             uploadMethod === 'camera' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
//           }`}
//         >
//           <Camera size={18} className="mr-2" />
//           <span>Use Camera</span>
//         </button>
//       </div>

//       {uploadMethod === 'upload' ? (
//         <div
//           className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
//           onClick={() => fileInputRef.current.click()}
//         >
//           <input
//             type="file"
//             ref={fileInputRef}
//             onChange={handleFileUpload}
//             accept="image/*"
//             className="hidden"
//           />
//           <div className="mb-4 bg-indigo-100 p-4 rounded-full">
//             <Upload size={32} className="text-indigo-600" />
//           </div>
//           <p className="mb-2 text-sm font-medium text-gray-700">Click to upload or drag and drop</p>
//           <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
//         </div>
//       ) : (
//         <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-black">
//           <Webcam
//             audio={false}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             className="w-full h-48 object-cover"
//           />
//           <div className="bg-gray-800 p-3 flex justify-center">
//             <button
//               onClick={handleCapture}
//               className="bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
//             >
//               <Camera size={24} />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   const renderProcessingStep = () => (
//     <div className="space-y-6">
//       <div className="mb-6 text-center">
//         <h2 className="text-xl font-semibold text-gray-800 mb-2">Processing Your ID</h2>
//         <p className="text-gray-600">{message}</p>
//       </div>
//       <div className="flex justify-center mt-4">
//         <button
//           onClick={handleReset}
//           className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//         >
//           <X size={16} className="mr-2" />
//           Cancel
//         </button>
//       </div>
//     </div>
//   );

//   const renderResultsStep = () => (
//     <div className="space-y-6">
//       <h2 className="text-xl font-semibold text-gray-800">Verification Results</h2>
//       <div className="flex justify-center mt-4">
//         <button
//           onClick={handleReset}
//           className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//         >
//           <RefreshCw size={16} className="mr-2" />
//           Upload New Document
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8">
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
//         <div className="p-6">
//           {step === 1 && renderUploadStep()}
//           {step === 2 && renderProcessingStep()}
//           {step === 3 && renderResultsStep()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UploadForm;