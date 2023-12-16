"use client"
import { ThemeProvider } from "@/components/theme-provider"
import Image from "next/image"
import logoname from "/NextJS - PIAIC/Tailwind CSS/ShadCN Ui/shadcn-ui/public/logo-removebg-preview.png"
import * as React from "react"
import { Compass, Moon, Sun, Youtube, } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { BellRing, Check } from "lucide-react"
 
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import star1 from "/NextJS - PIAIC/Tailwind CSS/ShadCN Ui/shadcn-ui/public/star1-removebg-preview.png"
import star2 from "/NextJS - PIAIC/Tailwind CSS/ShadCN Ui/shadcn-ui/public/star2-removebg-preview.png"
import star3 from "/NextJS - PIAIC/Tailwind CSS/ShadCN Ui/shadcn-ui/public/star3-removebg-preview.png"



  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"


const notifications = [
    {
      title: "AI Chatbot Integration",
     
    },
    {
      title: "Basic Data Analytics",
         },
    {
      title: "Email Support",
     
    },
    {
        title: "Monthly Analytics Report",
           },
  ]


  const notifications1 = [
    {
      title: "AI Chatbot Integration with Customization",
     
    },
    {
      title: "Advanced Data Analytics and Insights",
         },
    {
      title: "Priority Email and Phone Support",
     
    },
    {
        title: "Bi-Weekly Analytics Report and Recommendations",
           },
  ]

  const notifications2 = [
    {
      title: "Tailored AI Solutions for Business Needs",
     
    },
    {
      title: "Comprehensive Data Analytics and Predictive Modeling",
         },
    {
      title: "24/7 Priority Support with Dedicated Account Manager",
     
    },
    {
        title: "Weekly Analytics Reports, Strategy Meetings, and Continuous Improvement",
           },
  ]


  
type CardProps = React.ComponentProps<typeof Card> 

const CardDemo: React.FC<CardProps> = ({ className, ...props }) => {
    const { setTheme } = useTheme();
    return(
        <>
         <nav className="flex justify-between px-5 border-4  border-b-black shadow py-5 items-center ">
      <div>
        <ul className="flex items-center gap-10">
        <li className="flex items-center"><Image src={logoname} alt="logoname" className="w-[50px]"/><a href="" className="text-teal-600">Soorty's</a></li>
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
    <div className="flex justify-center items-center">
  <ul className="pt-16 mb-7 space-y-5"> {/* Add space-y-4 for vertical spacing */}
    <li><h1 className="text-6xl font-bold">Soorty's Membership</h1></li>
    <li><p className="text-zinc-500 text-lg px-8">Get Custom High-Quality AI integrations for your Small Business</p></li>
    
    <li className="items-center px-52"><Button variant={"outline"}>Contact Us</Button></li>
  </ul>
</div>
<div className="flex justify-around">
    
    <div>
    <Card className={cn("w-[380px]", className)} {...props}>
        <Image src={star1} alt="" className="w-[60px]  mx-40 pt-5"/>
      <CardHeader>
        <CardTitle> Essential Plan</CardTitle>
        <CardDescription className="font-bold">Price: $499/month</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
            Send notifications When There is <span className="text-green-500">Discount</span>
            </p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-green-600" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                 
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant={"outline"} className="w-full">
          <Check className="mr-2 h-4 w-4" /> Sign Up
        </Button>
      </CardFooter>
    </Card>
    </div>
    <div>
    <Card className={cn("w-[380px]", className)} {...props}>
    <Image src={star3} alt="" className="w-[60px]  mx-40 pt-5"/>
      <CardHeader>
        <CardTitle> Advanced Plan</CardTitle>
        <CardDescription className="font-bold">Price: $899/month</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
            Send notifications When There is <span className="text-green-500">Discount</span>
            </p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications1.map((notifications1, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-green-600" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notifications1.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button  variant={"outline"} className="w-full">
          <Check className="mr-2 h-4 w-4" /> Sign Up 
        </Button>
      </CardFooter>
    </Card>
    </div>
    <div>
    <Card className={cn("w-[380px]", className)} {...props}>
    <Image src={star2} alt="" className="w-[60px]  mx-40 pt-5"/>
      <CardHeader>
        <CardTitle>Premium Plan</CardTitle>
        <CardDescription className="font-bold">Price: Custom Quote</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications When There is <span className="text-green-500">Discount</span>
            </p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications2.map((notifications2, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-green-600" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notifications2.title}
                </p>
                <p className="text-sm text-muted-foreground">
                
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant={"outline"} className="w-full">
          <Check className="mr-2 h-4 w-4" /> Sign Up
        </Button>
      </CardFooter>
    </Card>
    </div>
    </div>

        </>
    )
}

export default CardDemo