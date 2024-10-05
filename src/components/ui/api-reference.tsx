"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight, Search, Menu } from "lucide-react";
import DocumentationAssistantOverlay from "./documentation-assistant-overlay";

export default function APIReference() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-0"
        } bg-white border-r border-gray-200 overflow-y-auto transition-all duration-300 ease-in-out`}
      >
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">API Reference</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <details open>
                <summary className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                  Getting Started
                  <ChevronDown className="w-4 h-4" />
                </summary>
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Authentication
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Errors
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                  Core Resources
                  <ChevronRight className="w-4 h-4" />
                </summary>
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <details>
                      <summary className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                        Users
                        <ChevronRight className="w-4 h-4" />
                      </summary>
                      <ul className="pl-4 mt-2 space-y-1">
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900"
                          >
                            List Users
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900"
                          >
                            Create User
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900"
                          >
                            Retrieve User
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900"
                          >
                            Update User
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900"
                          >
                            Delete User
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details>
                      <summary className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                        Projects
                        <ChevronRight className="w-4 h-4" />
                      </summary>
                      <ul className="pl-4 mt-2 space-y-1">
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900"
                          >
                            List Projects
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900"
                          >
                            Create Project
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900"
                          >
                            Retrieve Project
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900"
                          >
                            Update Project
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900"
                          >
                            Delete Project
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                  Advanced Features
                  <ChevronRight className="w-4 h-4" />
                </summary>
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Webhooks
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Rate Limiting
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                  Integrations
                  <ChevronRight className="w-4 h-4" />
                </summary>
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      OAuth
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Single Sign-On
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      API Keys
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                  SDKs & Libraries
                  <ChevronRight className="w-4 h-4" />
                </summary>
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      JavaScript
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Python
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Ruby
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Java
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Go
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="mr-4"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Users</h1>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </header>
        <main className="p-8">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              The User object
            </h2>
            <p className="text-gray-600 mb-4">
              A User object represents an individual account in the system. It
              contains basic information about the user and their permissions.
            </p>
            <div className="bg-white border border-gray-200 rounded-md p-4">
              <pre className="text-sm text-gray-800">
                {`{
  "id": "usr_7f8d9e6c5b4a",
  "object": "user",
  "email": "jane.doe@example.com",
  "name": "Jane Doe",
  "role": "admin",
  "created_at": 1652345678,
  "last_login": 1683456789
}`}
              </pre>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Create a User
            </h2>
            <p className="text-gray-600 mb-4">
              Creates a new User object in the system.
            </p>
            <div className="bg-white border border-gray-200 rounded-md p-4 mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                HTTP Request
              </h3>
              <p className="text-sm text-gray-600">
                <span className="bg-green-100 text-green-800 font-mono px-2 py-1 rounded">
                  POST
                </span>{" "}
                https://api.example.com/v1/users
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-md p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Arguments
              </h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-gray-600">
                      Argument
                    </th>
                    <th className="px-4 py-2 text-left text-gray-600">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-t px-4 py-2 text-gray-800 font-mono">
                      email
                    </td>
                    <td className="border-t px-4 py-2 text-gray-600">
                      The user's email address. Must be unique in the system.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t px-4 py-2 text-gray-800 font-mono">
                      name
                    </td>
                    <td className="border-t px-4 py-2 text-gray-600">
                      The user's full name.
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t px-4 py-2 text-gray-800 font-mono">
                      role
                    </td>
                    <td className="border-t px-4 py-2 text-gray-600">
                      The user's role in the system. Can be 'user', 'admin', or
                      'guest'.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
      <DocumentationAssistantOverlay />
    </div>
  );
}
