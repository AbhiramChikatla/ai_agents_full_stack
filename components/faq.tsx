"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How do I install GCA?",
      answer:
        "Installation is simple. You can install GCA using npm or yarn. Run `npm install gca` or `yarn add gca` in your project directory.",
    },
    {
      question: "Can I customize GCA for my needs?",
      answer:
        "Yes, GCA is highly customizable. You can configure settings, add custom plugins, and extend functionality through our API.",
    },
    {
      question: "What are the use cases for GCA?",
      answer:
        "GCA can be used for automated testing, performance monitoring, code analysis, and more. It's particularly useful for large-scale applications.",
    },
    {
      question: "How does GCA work?",
      answer:
        "GCA works by analyzing your codebase, creating optimized workflows, and providing real-time feedback for improvements.",
    },
  ]

  return (
    <section className="container px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-[#9FEF00]" />
            <span className="text-[#9FEF00] text-sm font-medium">FIND YOURS</span>
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Got Questions?
            <br />
            We&apos;ve Got Answers!
          </h2>
          <p className="mt-4 text-gray-400">If you need more details or want to dive deeper, check out our GitHub!</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:text-[#9FEF00]">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

