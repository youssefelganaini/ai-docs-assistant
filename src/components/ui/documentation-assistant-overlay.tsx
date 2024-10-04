import React, { useState, useEffect } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

// Simulated AI responses
const aiResponses = [
  {
    question: "How do I initialize a new project?",
    answer:
      "To initialize a new project, use the command `npm init` in your terminal. This will prompt you to enter details about your project and create a package.json file.",
  },
  {
    question: "What is the difference between let and const?",
    answer:
      "In JavaScript, `let` allows you to declare variables that can be reassigned, while `const` is used for variables whose values will not change (constants). Both `let` and `const` are block-scoped.",
  },
  {
    question: "How do I make an API request?",
    answer:
      "You can make an API request using the `fetch` function. Here's an example:\n\n```javascript\nfetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));\n```",
  },
];

export default function DocumentationAssistantOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI documentation assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }]);

    // Simulate AI response
    const aiResponse = aiResponses.find((r) =>
      r.question.toLowerCase().includes(input.toLowerCase())
    );
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: aiResponse
            ? aiResponse.answer
            : "I'm sorry, I don't have information on that specific topic. Could you try rephrasing your question or asking about something else?",
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <>
      {!isOpen && (
        <Button
          className="fixed bottom-4 right-4 rounded-full p-4"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open AI Assistant</span>
        </Button>
      )}
      {isVisible && (
        <div
          className={`fixed inset-y-0 right-0 w-96 bg-background border-l shadow-lg flex flex-col transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">AI Documentation Assistant</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <ScrollArea className="flex-grow p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </ScrollArea>
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex space-x-2"
            >
              <Input
                type="text"
                placeholder="Ask a question about the documentation..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button type="submit">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
