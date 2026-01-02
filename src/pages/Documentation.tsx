import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Printer } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Documentation = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background print:bg-white">
      {/* Header - Hidden in print */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border print:hidden">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate(-1)} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          {/* <Button onClick={handlePrint} className="gap-2">
            <Printer className="h-4 w-4" />
            Print / Save as PDF
          </Button> */}
        </div>
      </header>

      {/* Documentation Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl print:max-w-none print:px-8">
        {/* Title Page */}
        <div className="text-center mb-12 pb-12 border-b border-border print:border-black print:mb-8 print:pb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center print:border-2 print:border-black">
              <span className="text-3xl font-bold text-primary-foreground">Q</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 print:text-black">
            QuickTask
          </h1>
          <p className="text-xl text-muted-foreground mb-2 print:text-gray-600">
            Smart Daily Task Tracker Dashboard
          </p>
          <p className="text-lg text-muted-foreground print:text-gray-600">
            Technical Documentation
          </p>
         
        </div>


        {/* Section 1: Project Overview */}
        <section id="overview" className="mb-8 print:break-inside-avoid">
          <Card className="print:border print:border-gray-300 print:shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl print:text-black">1. Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none print:text-gray-700">
              <p>
                <strong>QuickTask</strong> is a secure web application that allows users to register, 
                log in, and manage their daily tasks efficiently. The application provides a 
                protected dashboard with JWT-based authentication where users can create, update, 
                delete, search, and filter tasks.
              </p>
              <h4 className="font-semibold mt-4 mb-2">Key Objectives:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Provide secure user authentication (Register/Login)</li>
                <li>Enable complete task management (CRUD operations)</li>
                <li>Implement search and filter functionality</li>
                <li>Create responsive and modern UI design</li>
                <li>Ensure secure logout mechanism</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Section 2: Technology Stack */}
        <section id="tech-stack" className="mb-8 print:break-inside-avoid">
          <Card className="print:border print:border-gray-300 print:shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl print:text-black">2. Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-primary print:text-black">Frontend Technologies</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/50 rounded-lg print:border print:border-gray-200">
                      <h5 className="font-medium">React.js (v18.3.1)</h5>
                      <p className="text-sm text-muted-foreground print:text-gray-600">
                        JavaScript library for building user interfaces with component-based architecture
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg print:border print:border-gray-200">
                      <h5 className="font-medium">TypeScript</h5>
                      <p className="text-sm text-muted-foreground print:text-gray-600">
                        Typed superset of JavaScript for better code quality and developer experience
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg print:border print:border-gray-200">
                      <h5 className="font-medium">Tailwind CSS</h5>
                      <p className="text-sm text-muted-foreground print:text-gray-600">
                        Utility-first CSS framework for rapid UI development
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg print:border print:border-gray-200">
                      <h5 className="font-medium">Vite</h5>
                      <p className="text-sm text-muted-foreground print:text-gray-600">
                        Next-generation frontend build tool for fast development
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-primary print:text-black">Libraries & Tools</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/50 rounded-lg print:border print:border-gray-200">
                      <h5 className="font-medium">React Router DOM (v6.30.1)</h5>
                      <p className="text-sm text-muted-foreground print:text-gray-600">
                        Declarative routing for React applications
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg print:border print:border-gray-200">
                      <h5 className="font-medium">Lucide React</h5>
                      <p className="text-sm text-muted-foreground print:text-gray-600">
                        Beautiful & consistent icon library
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg print:border print:border-gray-200">
                      <h5 className="font-medium">Radix UI Primitives</h5>
                      <p className="text-sm text-muted-foreground print:text-gray-600">
                        Unstyled, accessible UI components
                      </p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg print:border print:border-gray-200">
                      <h5 className="font-medium">Sonner</h5>
                      <p className="text-sm text-muted-foreground print:text-gray-600">
                        Toast notification library for React
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20 print:border-gray-300">
                <h4 className="font-semibold mb-2">Backend (Planned Integration)</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Node.js + Express</span>
                    <p className="text-muted-foreground print:text-gray-600">REST API server</p>
                  </div>
                  <div>
                    <span className="font-medium">MongoDB</span>
                    <p className="text-muted-foreground print:text-gray-600">NoSQL database</p>
                  </div>
                  <div>
                    <span className="font-medium">JWT + bcrypt</span>
                    <p className="text-muted-foreground print:text-gray-600">Authentication</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 3: Features */}
        <section id="features" className="mb-8 print:break-inside-avoid">
          <Card className="print:border print:border-gray-300 print:shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl print:text-black">3. Features Implemented</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4 print:border-gray-400">
                  <h4 className="font-semibold">✅ User Authentication</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1 print:text-gray-600">
                    <li>• User registration with email validation</li>
                    <li>• Login with email/password</li>
                    <li>• Password visibility toggle</li>
                    <li>• JWT token-based session management</li>
                    <li>• Secure logout functionality</li>
                  </ul>
                </div>
                <div className="border-l-4 border-primary pl-4 print:border-gray-400">
                  <h4 className="font-semibold">✅ Task Management (CRUD)</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1 print:text-gray-600">
                    <li>• Create new tasks with title and description</li>
                    <li>• Read/View all tasks in dashboard</li>
                    <li>• Update existing tasks via modal</li>
                    <li>• Delete tasks with confirmation</li>
                  </ul>
                </div>
                <div className="border-l-4 border-primary pl-4 print:border-gray-400">
                  <h4 className="font-semibold">✅ Task Status Management</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1 print:text-gray-600">
                    <li>• Toggle between Pending and Completed status</li>
                    <li>• Visual indicators for task status</li>
                    <li>• Task count statistics</li>
                  </ul>
                </div>
                <div className="border-l-4 border-primary pl-4 print:border-gray-400">
                  <h4 className="font-semibold">✅ Search & Filter</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1 print:text-gray-600">
                    <li>• Real-time search by task title</li>
                    <li>• Filter by status (All/Pending/Completed)</li>
                    <li>• Combined search and filter functionality</li>
                  </ul>
                </div>
                <div className="border-l-4 border-primary pl-4 print:border-gray-400">
                  <h4 className="font-semibold">✅ Responsive Design</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1 print:text-gray-600">
                    <li>• Mobile-first approach</li>
                    <li>• Adaptive layouts for all screen sizes</li>
                    <li>• Touch-friendly interface</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>


        {/* Section 4: Components */}
        <section id="components" className="mb-8 print:break-inside-avoid">
          <Card className="print:border print:border-gray-300 print:shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl print:text-black">4. Component Structure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">TaskCard Component</h4>
                <pre className="bg-muted p-3 rounded text-xs overflow-x-auto print:bg-gray-100">
{`interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}`}
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">TaskModal Component</h4>
                <pre className="bg-muted p-3 rounded text-xs overflow-x-auto print:bg-gray-100">
{`interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, description: string) => void;
  task?: Task | null;  // Optional for edit mode
}`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 5: Authentication */}
        <section id="authentication" className="mb-8 print:break-inside-avoid">
          <Card className="print:border print:border-gray-300 print:shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl print:text-black">5. Authentication Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg print:border print:border-gray-200">
                  <h4 className="font-semibold mb-2">Registration Flow</h4>
                  <ol className="list-decimal list-inside text-sm space-y-1 text-muted-foreground print:text-gray-600">
                    <li>User fills registration form (name, email, password)</li>
                    <li>Frontend validates input fields</li>
                    <li>POST request to /api/auth/register</li>
                    <li>Server hashes password with bcrypt</li>
                    <li>User stored in MongoDB database</li>
                    <li>JWT token generated and returned</li>
                    <li>Token stored in localStorage</li>
                    <li>User redirected to dashboard</li>
                  </ol>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg print:border print:border-gray-200">
                  <h4 className="font-semibold mb-2">Login Flow</h4>
                  <ol className="list-decimal list-inside text-sm space-y-1 text-muted-foreground print:text-gray-600">
                    <li>User enters email and password</li>
                    <li>POST request to /api/auth/login</li>
                    <li>Server verifies credentials with bcrypt</li>
                    <li>JWT token generated with user payload</li>
                    <li>Token returned to frontend</li>
                    <li>Token stored in localStorage</li>
                    <li>User redirected to protected dashboard</li>
                  </ol>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg print:border print:border-gray-200">
                  <h4 className="font-semibold mb-2">JWT Token Structure</h4>
                  <pre className="bg-background p-2 rounded text-xs print:bg-white print:border">
{`{
  "header": {
    "alg": "HS256",
    "typ": "JWT"
  },
  "payload": {
    "userId": "user_id",
    "email": "user@email.com",
    "iat": 1234567890,
    "exp": 1234654290
  }
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>





        {/* Footer */}
        <footer className="text-center py-8 border-t border-border mt-12 print:border-gray-300">
          <p className="text-muted-foreground print:text-gray-600">
            QuickTask © {new Date().getFullYear()} - Smart Daily Task Tracker Dashboard
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2 print:text-gray-500">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Documentation;
