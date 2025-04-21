import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Styled components with the same theme
const AppContainer = styled(Container)({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #1a1a2e 0%, #000000 100%)',
  display: 'flex',
  flexDirection: 'column',
  padding: '40px 20px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255, 46, 99, 0.1) 0%, rgba(108, 114, 203, 0.1) 100%)',
    animation: 'pulse 8s ease-in-out infinite',
  },
  '@keyframes pulse': {
    '0%': { opacity: 0.5 },
    '50%': { opacity: 0.8 },
    '100%': { opacity: 0.5 },
  },
});

const Decoration = styled(Box)({
  position: 'absolute',
  width: '150px',
  height: '150px',
  background: 'linear-gradient(45deg, #ff2e63 0%, #6c72cb 100%)',
  borderRadius: '50%',
  filter: 'blur(80px)',
  opacity: 0.5,
  animation: 'float 10s ease-in-out infinite',
  '&.top-left': {
    top: '10%',
    left: '5%',
  },
  '&.top-right': {
    top: '15%',
    right: '5%',
    animationDelay: '2s',
  },
  '&.bottom-left': {
    bottom: '10%',
    left: '8%',
    animationDelay: '4s',
  },
  '&.bottom-right': {
    bottom: '15%',
    right: '8%',
    animationDelay: '6s',
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translate(0, 0) scale(1)',
    },
    '50%': {
      transform: 'translate(20px, -20px) scale(1.1)',
    },
  },
});

const ContentContainer = styled(Paper)({
  background: 'rgba(37, 37, 66, 0.4)',
  backdropFilter: 'blur(20px)',
  borderRadius: '30px',
  padding: '40px',
  position: 'relative',
  zIndex: 1,
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  overflowY: 'auto',
  maxHeight: '80vh',
});

const AccordionContainer = styled(Box)({
  marginBottom: '16px',
  '&:last-child': {
    marginBottom: 0,
  }
});

const StyledAccordion = styled(Accordion)({
  background: 'rgba(37, 37, 66, 0.7)',
  color: '#ffffff',
  borderRadius: '15px !important',
  margin: '0 !important',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
  '& .MuiCollapse-root': {
    minHeight: '0 !important',
  },
  '&.Mui-expanded': {
    margin: '0 !important',
  },
});

const StyledAccordionSummary = styled(AccordionSummary)({
  borderRadius: '15px',
  '& .MuiAccordionSummary-content': {
    margin: '12px 0',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: '#ff2e63',
  },
  '&:hover': {
    background: 'rgba(255, 46, 99, 0.1)',
  },
});

const StyledAccordionDetails = styled(AccordionDetails)({
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '20px',
});

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      question: "What does your platform do?",
      answer: "It's an AI-based smart education platform that personalizes learning for every student."
    },
    {
      question: "How is it different from other ed-tech platforms?",
      answer: "We use AI to adapt content in real-time, based on the learner's performance, speed, and style."
    },
    {
      question: "Who is it for?",
      answer: "Students, professionals, and educators — basically anyone who wants to learn smarter, not harder."
    },
    {
      question: "What subjects or features are offered?",
      answer: "Academic subjects, skill courses, quizzes, progress tracking, mentor support — all in one place."
    },
    {
      question: "Is it scalable and secure?",
      answer: "Absolutely. It's built to scale for institutions and individual users, with complete data privacy."
    }
  ];

  return (
    <div>
      <Navbar />
      <AppContainer maxWidth={false}>
        <Decoration className="top-left" />
        <Decoration className="top-right" />
        <Decoration className="bottom-left" />
        <Decoration className="bottom-right" />
        
        <ContentContainer>
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#ff2e63', 
              mb: 4, 
              textAlign: 'center',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              textShadow: '0 0 20px rgba(255, 46, 99, 0.5), 0 0 40px rgba(255, 46, 99, 0.3)',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #ff2e63, #6c72cb)',
                borderRadius: '2px',
              }
            }}
          >
            Frequently Asked Questions
          </Typography>

          {faqData.map((faq, index) => (
            <AccordionContainer key={index}>
              <StyledAccordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <StyledAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: expanded === `panel${index}` ? '#ff2e63' : '#ffffff',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {faq.question}
                  </Typography>
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                  <Typography
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: 1.6
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </StyledAccordionDetails>
              </StyledAccordion>
            </AccordionContainer>
          ))}
        </ContentContainer>
      </AppContainer>
      <Footer />
    </div>
  );
};

export default FAQ;
