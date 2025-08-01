import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import profileImage from "./assets/profile.jpg";
import reverseOsmosisImage from "./assets/reverse_osmosis.png";
import waterSoftenerImage from "./assets/water_softenerss.png";
import wholeHouseImage from "./assets/whole_house_systems.png";
import waterSystemImage from "./assets/water_system.png";

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome to DaveDoesWater.com! I'm your water conditioning expert. Ask me anything about Reverse Osmosis, Water Softeners, or other water conditioning systems.",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);
  const observer = useRef();

  // Initialize intersection observer for animations
  useEffect(() => {
    // Create observer
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe elements
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.current.observe(el));

    // Cleanup
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const waterTerms = [
    "City Water",
    "Well Water",
    "Hard Water",
    "Soft Water",
    "Spring Water",
    "Purified Water",
    "Distilled Water",
    "Alkaline Water",
    "UV Treatment",
    "Ion Exchange",
    "Reverse Osmosis",
    "Corrosion",
    "Limescale",
    "Soap Scum",
    "Chlorine",
    "Calcium",
    "Sulfur",
    "Bacteria",
    "Pesticides",
    "Heavy Metals",
    "E. Coli",
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
    };

    setMessages((prev) => [...prev, newUserMessage]);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);

      // Scroll to bottom of messages after bot response
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }, 1000);

    setInputValue("");
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes("reverse osmosis") || message.includes("ro")) {
      return "Reverse Osmosis systems remove up to 99% of contaminants from water, including lead, chlorine, and bacteria. Our Hague Water RO systems are among the best in the industry with multi-stage filtration for pure, great-tasting water.";
    }

    if (message.includes("water softener") || message.includes("hard water")) {
      return "Water softeners remove calcium and magnesium that cause hard water. Our Hague Water softeners use salt-free technology that's environmentally friendly and reduces scale buildup in pipes and appliances.";
    }

    if (message.includes("hague")) {
      return "Hague Water Systems are premium water conditioning solutions designed for whole-house applications. They offer comprehensive protection against contaminants with systems that include Reverse Osmosis, Water Softeners, and specialty filters.";
    }

    if (message.includes("contaminant") || message.includes("filter")) {
      return "Our water conditioning systems filter out various contaminants including chlorine, lead, bacteria, viruses, and heavy metals. Each system is tailored to your specific water conditions for optimal performance.";
    }

    return "I'm here to help you learn about water conditioning systems! You can ask me about Reverse Osmosis systems, Water Softeners, or any other water treatment questions. How can I help you today?";
  };

  const scrollToChat = (e) => {
    e.preventDefault();
    const chatSection = document.getElementById("chatbot");
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">
            DaveDoesWater<span className="dot">.</span>com
          </h1>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#water-terms">Water Terms</a>
            <a href="#chatbot" onClick={scrollToChat}>
              Ask Water Chat
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero hidden" id="home">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title fade-in">
              Welcome to DaveDoesWater.com!
            </h2>
            <p className="hero-subtitle fade-in delay-1">
              Expert water conditioning systems including Reverse Osmosis, Water
              Softeners, and more from Hague Water.
            </p>
            <a
              href="#chatbot"
              className="cta-button fade-in delay-2"
              onClick={scrollToChat}
            >
              Ask Our Water Expert
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about hidden" id="about">
        <div className="container">
          <h2 className="section-title fade-in">Why Choose DaveDoesWater?</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="fade-in" style={{marginBottom: "15px"}}>
                Water is a solvent, as it moves through the earth it disoolves
                the minerals it comes in contact with. This is why the water in
                your community can be very different from the Water 10 miles
                away.
              </p>
              <p className="fade-in delay-1" style={{marginBottom: "15px"}}>
                Dave Bauer has 15 years experience in the Water conditioning
                industry. This website is free and designed to help you
                understand water and the various solutions available to you.
                After spending some time here, you should be better prepared to
                understand the specific solutions that are best for you and your
                family.
              </p>
              <p className="fade-in delay-2" style={{marginBottom: "15px"}}>
                All Pro Water is the official St Louis area distributor for
                Hague Water solutions. We offer 10 years parts and labor
                warranty and Hague Water comes with its own 25 year
                manufacturers warranty! Hague Water is proud to be Made in the
                USA!
              </p>
              <p className="fade-in delay-3" style={{marginBottom: "15px"}}>
                Call us when you are ready for us to conduct our free in-home
                water evaluation and solution!
              </p>

              {/* Testimonial Card */}
              <div className="testimonial-card fade-in delay-5">
                <div className="testimonial-image-section">
                  <img
                    src={profileImage}
                    alt="Emmily Patel"
                    className="testimonial-profile-image"
                  />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-header">
                    <h3 className="testimonial-quote">Contact Information</h3>
                    <p className="testimonial-phone">314-394-1500</p>
                  </div>

                  <p className="testimonial-text">
                    Ready for a free in-home water evaluation? Contact Dave
                    Bauer today for expert water treatment solutions in the St.
                    Louis area.
                  </p>
                  <div className="testimonial-footer">
                    <div className="contact-info">
                      <p className="testimonial-name">Dave Bauer</p>
                      <p className="contact-email">Dave@ApwStl.com</p>
                    </div>
                    <div className="social-icons">
                      <span className="social-icon">f</span>
                      <span className="social-icon">in</span>
                      <span className="social-icon">X</span>
                      <span className="social-icon">●</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Systems Section */}
      {/* <section className="systems hidden" id="systems">
        <div className="container">
          <h2 className="section-title fade-in">
            Our Water Conditioning Systems
          </h2>
          <div className="systems-grid">
            <div className="system-card hidden">
              <img
                src={reverseOsmosisImage}
                alt="Reverse Osmosis System"
                className="system-image"
              />
              <h3>Reverse Osmosis</h3>
              <p>
                Multi-stage filtration removing up to 99% of contaminants for
                pure, great-tasting water.
              </p>
            </div>
            <div className="system-card hidden delay-1">
              <img
                src={waterSoftenerImage}
                alt="Water Softener System"
                className="system-image"
              />
              <h3>Water Softeners</h3>
              <p>
                Eliminate hard water minerals that cause scale buildup and
                reduce soap effectiveness.
              </p>
            </div>
            <div className="system-card hidden delay-2">
              <img
                src={wholeHouseImage}
                alt="Whole House Water System"
                className="system-image"
              />
              <h3>Whole House Systems</h3>
              <p>
                Comprehensive protection for all water entering your home with
                Hague Water technology.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Water Terms Cards */}
      <section className="water-terms-cards hidden" id="water-terms">
        <div className="container">
          <h2 className="section-title fade-in">
            Water Types & Treatment Terms
          </h2>
          <div className="terms-cards-container">
            <div className="terms-card hidden">
              <h3 className="card-title">Water Types & Issues</h3>
              <ul className="terms-list">
                <li>City Water</li>
                <li>Well Water</li>
                <li>Hard Water</li>
                <li>Soft Water</li>
                <li>Corrosion</li>
                <li>Limescale</li>
                <li>Soap Scum</li>
              </ul>
            </div>

            <div className="terms-card hidden delay-1">
              <h3 className="card-title">Treatment Methods</h3>
              <ul className="terms-list">
                <li>Spring Water</li>
                <li>Purified Water</li>
                <li>Distilled Water</li>
                <li>Alkaline Water</li>
                <li>UV Treatment</li>
                <li>Ion Exchange</li>
                <li>Reverse Osmosis</li>
              </ul>
            </div>

            <div className="terms-card hidden delay-2">
              <h3 className="card-title">Contaminants</h3>
              <ul className="terms-list">
                <li>Chlorine</li>
                <li>Calcium</li>
                <li>Sulfur</li>
                <li>Bacteria</li>
                <li>Pesticides</li>
                <li>Heavy Metals</li>
                <li>E. Coli</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="chatbot-section hidden" id="chatbot">
        <div className="container">
          <h2 className="section-title fade-in">Ask Our Water Expert</h2>
          <p className="section-description fade-in delay-1">
            Get instant answers about water conditioning systems, including
            Reverse Osmosis, Water Softeners, and Hague Water products.
          </p>

          <div className="chatbot-container">
            <div className="chatbot-header">
              <h3>Water Conditioning Expert</h3>
              <p>Ask me anything about water treatment systems</p>
            </div>

            <div className="chatbot-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.sender} ${
                    message.sender === "bot" ? "fade-in-up" : "fade-in-right"
                  }`}
                >
                  <div className="message-content">{message.text}</div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form className="chatbot-input" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about water softeners, reverse osmosis, or Hague Water systems..."
                className="message-input"
              />
              <button type="submit" className="send-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer hidden">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>
                DaveDoesWater<span className="dot">.</span>com
              </h2>
              <p>
                Pure water solutions for your home. Specializing in Hague Water
                Conditioning Systems.
              </p>
            </div>
            <div className="footer-contact">
              <h3>Contact Us</h3>
              <p>Email: Dave@ApwStl.com</p>
              <p>Phone: 314-394-1500</p>
              <p>Specialist: Dave Bauer</p>
            </div>
          </div>
          
        </div>

        <h2
          style={{
            lineHeight: 1,
            marginTop: "1rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "transparent",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            backgroundImage:
              "linear-gradient(to bottom,rgba(61, 129, 218, 0.88) 0%,rgba(35, 117, 224, 0.2) 70%,rgba(28, 105, 206, 0.03) 100%)",
          }}
          className="responsive-title"
        >
          Davedoeswater
        </h2>
        <div className="footer-bottom">
            <p>&copy; 2025 DaveDoesWater.com. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
}

export default App;
