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
    question:
      "What’s the best way to batch create multiple resources with minimal API requests?",
    answer:
      'Our API supports batch operations to minimize the number of requests. Instead of creating resources one-by-one, you can use the `/batch` endpoint.\n\nExample request to create multiple users:\n\n```bash\nPOST https://api.example.com/v1/users/batch\n[\n  {\n    "name": "Alice",\n    "email": "alice@example.com"\n  },\n  {\n    "name": "Bob",\n    "email": "bob@example.com"\n  }\n]\n```\n\nThis will create both users in a single request, and the response will include the details of all newly created resources.',
  },
  {
    question:
      "How can I handle rate limit exceeded errors and automatically retry my requests?",
    answer:
      "When your API requests hit the rate limit, you'll receive a `429 Too Many Requests` response. To handle this, you should inspect the `Retry-After` header in the response, which tells you how long to wait before trying again.\n\nExample code:\n\n```javascript\nif (response.status === 429) {\n  const retryAfter = response.headers['Retry-After'];\n  setTimeout(() => {\n    // Retry the request after retryAfter seconds\n    sendRequest();\n  }, retryAfter * 1000);\n}\n```",
  },
  {
    question:
      "How do I send a file along with JSON data in a single API request?",
    answer:
      'Use `multipart/form-data` for this kind of request. Here’s an example in cURL:\n\n```bash\ncurl -X POST https://api.example.com/v1/upload \\\n-F "file=@path/to/file.jpg" \\\n-F "metadata={\\"description\\": \\"Profile picture\\"};type=application/json"\n```\n\nThis sends both the file and the metadata in a single request.',
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
