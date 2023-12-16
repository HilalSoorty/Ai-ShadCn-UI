"use client"
import Image from "next/image"
import logoname from "/NextJS - PIAIC/Tailwind CSS/ShadCN Ui/shadcn-ui/public/logo-removebg-preview.png"
import mainstar from "/NextJS - PIAIC/Tailwind CSS/ShadCN Ui/shadcn-ui/public/main-removebg.png"
import codegpt from "/NextJS - PIAIC/Tailwind CSS/ShadCN Ui/shadcn-ui/public/code.gpt.jpg"
import butler from "/NextJS - PIAIC/Tailwind CSS/ShadCN Ui/shadcn-ui/public/anothergpt.jpg"
import bolt from "/NextJS - PIAIC/Tailwind CSS/ShadCN Ui/shadcn-ui/public/bolt.jpg"
import nextjs from "/NextJS - PIAIC/Tailwind CSS/ShadCN Ui/shadcn-ui/public/nextjs-removebg-preview.png"
import openAi from "/NextJS - PIAIC/Tailwind CSS/ShadCN Ui/shadcn-ui/public/gpt-removebg-preview.png"
import vercel from "/NextJS - PIAIC/Tailwind CSS/ShadCN Ui/shadcn-ui/public/1_oBm_3saYz4AI_MS6OekdFQ-removebg-preview.png"
import superbase from "/NextJS - PIAIC/Tailwind CSS/ShadCN Ui/shadcn-ui/public/superbase.webp"
import * as React from "react"
import { Compass, Ghost, Moon, Sun, Youtube, } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <>
      <nav className="flex justify-between px-5 border-4  border-b-black shadow py-5 items-center ">
      <div>
        <ul className="flex items-center gap-10">
        <li className="flex items-center"><Image src={logoname} alt="logoname" className="w-[50px]"/><a href="" className="text-green-700">Soorty's</a></li>
        <li className="flex gap-2 hover:text-zinc-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
</svg>
Chatbots</li>
<li className="flex items-center gap-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-badge-cent"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M12 7v10"/><path d="M15.4 10a4 4 0 1 0 0 4"/></svg>
  <Link href="/Pricing">Pricing</Link></li>
        </ul>
        
      </div>
    <div>
      <ul className="flex gap-10 items-center">
        <li className="flex gap-2"><Youtube/>Youtube</li>
        <li className="flex gap-2"><Compass/>Consulting</li>
        <li>
                  <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </li>
    <li className="border rounded p-2 hover:bg-zinc-500">Login</li>
    <li ><Image src={logoname} alt="logo" className="w-[50px]"/></li>
    </ul>
    </div>
    </nav>
        <div className="flex flex-col justify-center items-center pt-10 ">
      <div><Image src={mainstar} alt="" className="w-[400px]"/></div>
      <div className="mb-4">
  <h1 className="text-6xl font-bold">We Build Intelligent AI</h1>
  <h1 className="text-5xl font-bold px-24">With Beautiful UI</h1>
</div>
<div className="mb-4">
  <p className="text-zinc-500">Get Custom High-Quality AI Integrations for your small business</p>
</div>
<div className="flex gap-5">
  <Button  variant={"outline"} className="mx-2 px-8">Intro Call</Button>
  <Button className="mx-2 px-8">Pricing</Button>
</div>
</div>

<div>
        <div className="flex items-center justify-center">
            <h1 className="text-6xl text-white mt-20 font-bold">Soorty's Chatbots</h1>
        </div>
    </div>

    <div className="flex justify-between pt-20">
  <div className="flex justify-around pt-20 space-x-4">
    <div className="mb-10">
      <ul className="flex flex-col border border-zinc-800 rounded-md px-10">
        <li><h1 className="text-2xl font-bold">Code.Chat</h1></li>
        <li><p className="text-lg font-mono">GPT-4 HNSWLib Front-End Dev AI Assistant</p></li>
        <li>
          <div className="border border-zinc-800 w-full h-40 flex items-center justify-center ">
            <Image src={codegpt} alt="CodeGpt" className="w-full h-full object-cover rounded-t-md" />
          </div>
        </li>
        <li className="w-full">
          <Button  variant={Ghost} className="w-full mt-5 bg-black text-white rounded-b-md border-t border-b border-r border-zinc-800 hover:bg-gray-900 focus:outline-none focus:border-gray-800 focus:ring focus:ring-gray-300">
            Visit Website
          </Button>
        </li>
      </ul>
    </div>
  </div>

  <div className="flex justify-around pt-20 space-x-4">
    <div className="mb-10">
      <ul className="flex flex-col border border-zinc-800 rounded-md px-10">
        <li><h1 className="text-2xl font-bold">Butler</h1></li>
        <li><p className="text-lg font-mono">GPT-4 AutoSEO Producing Knowledgebase</p></li>
        <li>
          <div className="border border-zinc-800 w-full h-40 flex items-center justify-center ">
            <Image src={butler} alt="Butler" className="w-full h-full object-cover rounded-t-md" />
          </div>
        </li>
        <li className="w-full">
          <Button variant={Ghost} className="w-full mt-5 bg-black text-white rounded-b-md border-t border-b border-r border-zinc-800 hover:bg-gray-900 focus:outline-none focus:border-gray-800 focus:ring focus:ring-gray-300">
            Visit Website
          </Button>
        </li>
      </ul>
    </div>
  </div>

  <div className="flex justify-around pt-20 space-x-4">
    <div className="mb-10">
      <ul className="flex flex-col border border-zinc-800 rounded-md px-10">
        <li><h1 className="text-2xl font-bold">VoltBoost</h1></li>
        <li><p className="text-lg font-mono">ESG Public Accounting Standards Synthesis</p></li>
        <li>
          <div className="border border-zinc-800 w-full h-40 flex items-center justify-center ">
            <Image src={bolt} alt="VoltBoost" className="w-full h-full object-cover rounded-t-md" />
          </div>
        </li>
        <li className="w-full">
          <Button variant={Ghost} className="w-full mt-5  text-white rounded-b-md border-t border-b border-r border-zinc-800 hover:bg-gray-900 focus:outline-none focus:border-gray-800 focus:ring focus:ring-gray-300">
            Visit Website
          </Button>
        </li>
      </ul>
    </div>
  </div>
</div>

<div>
        <div className="flex items-center justify-center">
            <h1 className="text-6xl text-white mt-20 font-medium">Powered By</h1>
        </div>
    </div>
    <div>
      <ul className="flex items-center justify-between mx-10">
        <li><Image src={openAi} alt="OpenAi"/></li>
        <li><Image src={vercel} alt="Vercel"/></li>
        <li><Image src={nextjs} alt="NextJs"/></li>
        <li><Image src={superbase} alt="SuperBase"/></li>
        
              </ul>
    </div>
    </>

  )
}
