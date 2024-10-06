import React, { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Simulated AI responses
const aiResponses = [
  {
    question: "How can I filter users by role in the /users endpoint?",
    answer:
      "To filter users by role, use the `role` query parameter in your API request.\n\nExample:\n\n```bash\nGET https://api.example.com/v1/users?role=admin\n```\n\nThis will return a list of users with the `admin` role.",
  },
  {
    question:
      "How do I update multiple resources at once using the /batch endpoint?",
    answer:
      'You can update multiple resources in one API call using the `/batch` endpoint. Send a `PATCH` request with the resources and their updated values in an array.\n\nExample:\n\n```bash\nPATCH https://api.example.com/v1/resources/batch\n[\n  {\n    "id": 1,\n    "status": "active"\n  },\n  {\n    "id": 2,\n    "status": "inactive"\n  }\n]\n```',
  },
  {
    question: "What does the limit parameter do in the /transactions endpoint?",
    answer:
      "The `limit` parameter specifies the maximum number of transactions to return in the response. For example, setting `limit=50` will return up to 50 transactions.\n\nExample:\n\n```bash\nGET https://api.example.com/v1/transactions?limit=50\n```",
  },
  {
    question:
      "How do I include related data when fetching a resource in the /orders endpoint?",
    answer:
      "To include related data (e.g., customer details) when fetching an order, use the `include` query parameter.\n\nExample:\n\n```bash\nGET https://api.example.com/v1/orders/123?include=customer\n```\n\nThis will return the order along with customer details.",
  },
  {
    question:
      "How do I perform a soft delete on a record using the /records endpoint?",
    answer:
      "To soft delete a record, use the `DELETE` method with the `soft=true` query parameter.\n\nExample:\n\n```bash\nDELETE https://api.example.com/v1/records/456?soft=true\n```",
  },
];

export default function DocumentationAssistantOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI documentation assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

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

  const MarkdownComponents = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          PreTag="div"
          {...props}
          customStyle={{
            fontSize: "0.9rem", // Match the font size of the parent text
            lineHeight: "1.25rem", // Match the line height
            fontFamily: "'Fira Code', 'Courier New', Courier, monospace",
          }}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <>
      {!isOpen && (
        <Button
          className="fixed bottom-4 right-4 rounded-full p-4"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">AI Documentation Assistant</span>
        </Button>
      )}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-96 bg-background border-l shadow-lg flex flex-col">
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
          <ScrollArea className="flex-grow p-4 overflow-x-auto">
            {" "}
            {/* Allow horizontal scrolling */}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-2 rounded-lg break-words max-w-full ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                  style={{ wordWrap: "break-word" }} // Ensures long words or code blocks wrap properly
                >
                  {message.role === "assistant" ? (
                    <ReactMarkdown
                      components={MarkdownComponents}
                      className="markdown-body"
                    >
                      {message.content}
                    </ReactMarkdown>
                  ) : (
                    message.content
                  )}
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
