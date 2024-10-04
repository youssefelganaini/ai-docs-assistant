"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DocumentationAssistantOverlay from "./documentation-assistant-overlay";

export default function APIReference() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">User API Reference</h1>

      <Tabs defaultValue="get-users">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="get-users">Get Users</TabsTrigger>
          <TabsTrigger value="create-user">Create User</TabsTrigger>
          <TabsTrigger value="update-user">Update User</TabsTrigger>
        </TabsList>

        <TabsContent value="get-users">
          <Card>
            <CardHeader>
              <CardTitle>GET /api/users</CardTitle>
              <CardDescription>Retrieve a list of users</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Parameters</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>page</TableCell>
                    <TableCell>integer</TableCell>
                    <TableCell>
                      Page number for pagination (default: 1)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>limit</TableCell>
                    <TableCell>integer</TableCell>
                    <TableCell>
                      Number of results per page (default: 20, max: 100)
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3 className="text-lg font-semibold mt-4 mb-2">Response</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                {JSON.stringify(
                  {
                    users: [
                      { id: 1, name: "John Doe", email: "john@example.com" },
                      { id: 2, name: "Jane Smith", email: "jane@example.com" },
                    ],
                    total: 2,
                    page: 1,
                    limit: 20,
                  },
                  null,
                  2
                )}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create-user">
          <Card>
            <CardHeader>
              <CardTitle>POST /api/users</CardTitle>
              <CardDescription>Create a new user</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Request Body</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>Full name of the user</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>email</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>Email address of the user</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>password</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>Password for the user account</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3 className="text-lg font-semibold mt-4 mb-2">Response</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                {JSON.stringify(
                  {
                    id: 3,
                    name: "New User",
                    email: "newuser@example.com",
                    created_at: "2023-06-01T12:00:00Z",
                  },
                  null,
                  2
                )}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="update-user">
          <Card>
            <CardHeader>
              <CardTitle>PUT /api/users/:id</CardTitle>
              <CardDescription>Update an existing user</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Path Parameters</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>integer</TableCell>
                    <TableCell>ID of the user to update</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3 className="text-lg font-semibold mt-4 mb-2">Request Body</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>
                      Updated full name of the user (optional)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>email</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>
                      Updated email address of the user (optional)
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3 className="text-lg font-semibold mt-4 mb-2">Response</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                {JSON.stringify(
                  {
                    id: 1,
                    name: "Updated User",
                    email: "updated@example.com",
                    updated_at: "2023-06-01T14:30:00Z",
                  },
                  null,
                  2
                )}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <DocumentationAssistantOverlay />
    </div>
  );
}
