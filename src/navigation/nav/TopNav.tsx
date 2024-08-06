"use client"

import * as React from "react"
import { Speech, LibraryBig, ArrowUpRight  } from 'lucide-react';

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"


export function NavigationMenuDemo() {
  return (
    <>

    <nav className={`yflex yflex-row yjustify-between yitems-center ypy-2 ypx-3 md:ypy-4 md:ypx-10 yshadow-lg`}>
    <h1 className={`yfont-TrapBlack ytext-2xl`}>Ediomo</h1>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="ygrid ygap-5 yp-5 yw-[150px] md:yw-[200px] lg:grid-cols-[.75fr_1fr]">
              <li className={``}>
                <NavigationMenuLink asChild className={``}>
                  <a
                    className="yflex yflex-roe ygap-3 h-full w-full select-none  justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Speech />
                    <div className="mb-2 mt-4 text-lg font-medium">
                     About
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <li className={``}>
                <NavigationMenuLink asChild className={``}>
                  <a
                    className="yflex yflex-roe ygap-3 h-full w-full select-none  justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <LibraryBig />
                    <div className="mb-2 mt-4 text-lg font-medium">
                     Blog
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/docs">
            <NavigationMenuLink className={'yflex yitems-center yjustify-center ybg-transperent ytext-sm ypy-2 yring-1  ypx-4 md:ypy-2 md:ypx-5 yrounded-full md:yring-2' }>
              {`Let's talk`} <ArrowUpRight />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </nav>
    </>
  )
}



