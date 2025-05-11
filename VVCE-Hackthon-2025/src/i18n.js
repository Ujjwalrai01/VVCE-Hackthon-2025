import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        features: "Features",
        howItWorks: "How It Works",
        contact: "Contact",
      },
      hero: {
        title: "Secure Identity Verification in Seconds",
        description: "Protect your business with our state-of-the-art AI verification system that detects fraud and tampering instantly.",
        getStarted: "Get Started Free",
        seeHowItWorks: "See How It Works",
      },
      howItWorks: {
        title: "How It Works",
        description: "Simple, secure verification in just three easy steps",
        steps: [
          { title: "Upload Document", description: "Securely upload an ID document through our encrypted platform." },
          { title: "AI Analysis", description: "Our AI analyzes and verifies all document security features." },
          { title: "Get Results", description: "Receive instant verification results with detailed analysis." },
        ],
      },
      footer: {
        rights: "© 2025 IDVerifyAI. All rights reserved.",
      },
    },
  },
  hi: {
    translation: {
      navbar: {
        home: "होम",
        features: "विशेषताएँ",
        howItWorks: "यह कैसे काम करता है",
        contact: "संपर्क करें",
      },
      hero: {
        title: "सेकंडों में सुरक्षित पहचान सत्यापन",
        description: "हमारी अत्याधुनिक एआई सत्यापन प्रणाली के साथ अपने व्यवसाय की सुरक्षा करें जो धोखाधड़ी और छेड़छाड़ का तुरंत पता लगाती है।",
        getStarted: "मुफ्त में शुरू करें",
        seeHowItWorks: "यह कैसे काम करता है देखें",
      },
      howItWorks: {
        title: "यह कैसे काम करता है",
        description: "सिर्फ तीन आसान चरणों में सरल, सुरक्षित सत्यापन",
        steps: [
          { title: "दस्तावेज़ अपलोड करें", description: "हमारे एन्क्रिप्टेड प्लेटफ़ॉर्म के माध्यम से एक आईडी दस्तावेज़ सुरक्षित रूप से अपलोड करें।" },
          { title: "एआई विश्लेषण", description: "हमारा एआई सभी दस्तावेज़ सुरक्षा सुविधाओं का विश्लेषण और सत्यापन करता है।" },
          { title: "परिणाम प्राप्त करें", description: "विस्तृत विश्लेषण के साथ त्वरित सत्यापन परिणाम प्राप्त करें।" },
        ],
      },
      footer: {
        rights: "© 2025 IDVerifyAI. सर्वाधिकार सुरक्षित।",
      },
    },
  },
  kn: {
    translation: {
      navbar: {
        home: "ಮುಖಪುಟ",
        features: "ವೈಶಿಷ್ಟ್ಯಗಳು",
        howItWorks: "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
        contact: "ಸಂಪರ್ಕಿಸಿ",
      },
      hero: {
        title: "ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಸುರಕ್ಷಿತ ಗುರುತಿನ ಪರಿಶೀಲನೆ",
        description: "ನಮ್ಮ ಅತ್ಯಾಧುನಿಕ ಎಐ ಪರಿಶೀಲನಾ ವ್ಯವಸ್ಥೆಯೊಂದಿಗೆ ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ರಕ್ಷಿಸಿ, ಇದು ತಕ್ಷಣವೇ ಮೋಸ ಮತ್ತು ತಿದ್ದುಪಡಿ ಪತ್ತೆಹಚ್ಚುತ್ತದೆ.",
        getStarted: "ಉಚಿತವಾಗಿ ಪ್ರಾರಂಭಿಸಿ",
        seeHowItWorks: "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ನೋಡಿ",
      },
      howItWorks: {
        title: "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
        description: "ಮೂರು ಸುಲಭ ಹಂತಗಳಲ್ಲಿ ಸರಳ, ಸುರಕ್ಷಿತ ಪರಿಶೀಲನೆ",
        steps: [
          { title: "ಡಾಕ್ಯುಮೆಂಟ್ ಅಪ್ಲೋಡ್ ಮಾಡಿ", description: "ನಮ್ಮ ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ವೇದಿಕೆಯ ಮೂಲಕ ಐಡಿ ಡಾಕ್ಯುಮೆಂಟ್ ಅನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಅಪ್ಲೋಡ್ ಮಾಡಿ." },
          { title: "ಎಐ ವಿಶ್ಲೇಷಣೆ", description: "ನಮ್ಮ ಎಐ ಎಲ್ಲಾ ಡಾಕ್ಯುಮೆಂಟ್ ಭದ್ರತಾ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತದೆ ಮತ್ತು ಪರಿಶೀಲಿಸುತ್ತದೆ." },
          { title: "ಫಲಿತಾಂಶಗಳನ್ನು ಪಡೆಯಿರಿ", description: "ವಿವರವಾದ ವಿಶ್ಲೇಷಣೆಯೊಂದಿಗೆ ತಕ್ಷಣದ ಪರಿಶೀಲನಾ ಫಲಿತಾಂಶಗಳನ್ನು ಪಡೆಯಿರಿ." },
        ],
      },
      footer: {
        rights: "© 2025 IDVerifyAI. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
      },
    },
  },
};

// Initialize i18next
i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;