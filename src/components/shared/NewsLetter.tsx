"use client";

// If using ShadCN UI
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function NewsletterPage() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-4 flex items-center justify-center">
      <Card className="w-full max-w-xl shadow-xl">
        <CardContent className="p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
            Subscribe to Our Newsletter
          </h1>
          <p className="mt-3 text-center text-gray-600 dark:text-gray-300">
            Get the latest blogs, tutorials, and updates directly to your inbox.
          </p>

          {subscribed ? (
            <p className="mt-6 text-green-600 dark:text-green-400 text-center font-medium">
              🎉 Thanks for subscribing! You'll hear from us soon.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-8 space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                required
                className="w-full"
              />
              <Input
                type="email"
                placeholder="Your Email"
                required
                className="w-full"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}