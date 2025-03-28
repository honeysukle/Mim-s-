import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

function MimamsaMathPortal() {
  const [notices, setNotices] = useState([
    "Welcome to the Mīmāṁsā Math Portal! Here, you'll find assignments, notices, and interactive learning materials.",
    "Next assignment: Submit your LaTeX-rendered math proof by March 31, 2025.",
  ]);

  const [password, setPassword] = useState("");
  const handleLogin = () => {
    alert("Feature Coming Soon! Backend support will be added later.");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-4 text-2xl font-bold">
        Mīmāṁsā Math Portal
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 py-10 text-center text-white">
        <h1 className="text-4xl font-extrabold mb-2">Unlock the Power of Mathematics</h1>
        <p className="text-lg font-medium">
          Explore, Solve, and Collaborate with Mīmāṁsā Math Portal’s Interactive Features.
        </p>
      </section>

      {/* Notices Section */}
      <section className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Notices</h2>
        <div className="grid gap-4">
          {notices.map((notice, index) => (
            <Card key={index} className="bg-white p-4 shadow hover:shadow-lg">
              <CardContent>
                <p>{notice}</p>
                {index === 1 && (
                  <BlockMath>\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}</BlockMath>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Admin Login */}
      <section className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          className="border border-gray-300 p-2 rounded w-1/3 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={handleLogin}>
          Login
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        Mīmāṁsā Math Portal © 2025
      </footer>
    </div>
  );
}

export default MimamsaMathPortal;
