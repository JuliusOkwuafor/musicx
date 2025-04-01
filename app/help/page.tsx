"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, ChevronRight, ChevronDown } from "lucide-react"

export default function HelpPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      question: "How do I upload a song?",
      answer:
        "To upload a song, go to the Add Song page by clicking the + button in the navigation bar. Fill in the song details, upload your audio file, and complete the payment process.",
    },
    {
      id: 2,
      question: "How much does it cost to upload a song?",
      answer: "The cost to upload a song is $5.00 plus a $0.50 processing fee, for a total of $5.50 per song.",
    },
    {
      id: 3,
      question: "How do I get feedback on my music?",
      answer:
        "After uploading your song, listeners will be able to review it and provide feedback. You'll receive notifications when new feedback is available.",
    },
    {
      id: 4,
      question: "Can I delete my account?",
      answer:
        "Yes, you can delete your account by going to Settings > Account > Delete Account. Please note that this action is irreversible.",
    },
    {
      id: 5,
      question: "How do I become a listener?",
      answer:
        "You can switch to a listener account by going to your profile settings and selecting 'Switch to Listener'. You can always switch back to an artist account later.",
    },
  ]

  const toggleFaq = (id: number) => {
    if (expandedFaq === id) {
      setExpandedFaq(null)
    } else {
      setExpandedFaq(id)
    }
  }

  return (
    <main className="flex flex-col p-4">
      <h1 className="text-2xl font-bold">Help & Support</h1>

      <div className="relative mt-4">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search for help..." className="pl-9" />
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-medium">Frequently Asked Questions</h2>
        <div className="mt-2 space-y-2">
          {faqs.map((faq) => (
            <Card key={faq.id} className="overflow-hidden">
              <CardContent className="p-0">
                <button className="flex w-full items-center justify-between p-4" onClick={() => toggleFaq(faq.id)}>
                  <span className="text-sm font-medium">{faq.question}</span>
                  {expandedFaq === faq.id ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </button>
                {expandedFaq === faq.id && (
                  <div className="border-t border-border p-4">
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-medium">Contact Support</h2>
        <Card className="mt-2">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              Need more help? Our support team is available 24/7 to assist you.
            </p>
            <Button className="mt-4 w-full">Contact Support</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

