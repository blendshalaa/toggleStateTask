import { useState } from 'react';
import './App.css';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    { question: 'What is your company’s mission?', answer: 'Our mission is to provide exceptional service and innovative solutions.' },
    { question: 'Where are you located?', answer: 'We are located in the heart of the city, providing convenient access to all our clients.' },
    { question: 'What services do you offer?', answer: 'We offer a range of services including web development, digital marketing, and consulting.' },
    { question: 'How can I contact you?', answer: 'You can contact us via email, phone, or through our website contact form.' }
  ];

  return (
    <div className='main'>
      <div className='dropdown-container' onClick={toggleDropdown}>
        <span className='dropdown-title'>Why park a domain name in Parkname?</span>
        
        <div className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`} />
      </div>
      {isDropdownOpen && (
        <div className='dropdown-content'>
          <p>ParkName is the leading industry standard for domain name parking and monetization services.We offer a wide variety of servcies to help you achieve sucess</p>
        </div>
      )}

      <div className='dropdown-container' onClick={toggleAbout}>
        <span className='dropdown-title'>About Us</span>
      
        <div className={`dropdown-arrow ${isAboutOpen ? 'open' : ''}`} />
      </div>
      {isAboutOpen && (
        <div className='dropdown-content'>
          <span className='about-description'>Here is some information about us:</span>
          <div className='questions-list'>
            {questions.map((item, index) => (
              <div key={index} className='question-item' onClick={() => toggleQuestion(index)}>
                <div className='question-title'>
                  {item.question}
                  <div className={`question-arrow ${activeQuestion === index ? 'open' : ''}`} />
                </div>
                {activeQuestion === index && <p className='question-answer'>{item.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
