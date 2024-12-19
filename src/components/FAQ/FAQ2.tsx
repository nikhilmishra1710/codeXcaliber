import React, { useState, useEffect } from 'react';
import { Tab, TabContent } from './Tab';
import { faqData } from './faqData';
import "./styles.css";

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState('organisation')
  const [activePreview, setActivePreview] = useState<string | null>(null)

  useEffect(() => {
    setActivePreview('0')
  }, [activeTab])

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName)
  }

  const handleQuestionHover = (index: string) => {
    setActivePreview(index)
  }

  return (
    <div className="faq-container">
      <header className="faq-header">
        <h1>All that... and more.</h1>
        <p>Here's the answer to every question you have in mind!</p>
        <div className="faq-buttons">
          {Object.keys(faqData).map((tabName) => (
            <Tab
              key={tabName}
              name={tabName}
              isActive={activeTab === tabName}
              onClick={() => handleTabClick(tabName)}
            />
          ))}
        </div>
      </header>

      {Object.entries(faqData).map(([tabName, content]) => (
        <TabContent
          key={tabName}
          isActive={activeTab === tabName}
          content={content}
          activePreview={activePreview}
          onQuestionHover={handleQuestionHover}
        />
      ))}
    </div>
  )
}
