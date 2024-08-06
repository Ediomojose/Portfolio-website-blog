import PageFooter from "@/navigation/footer/PageFooter";
import { NavigationMenuDemo } from "@/navigation/nav/TopNav";
import React from "react";

interface PageTemplateProps {
  children: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <main className={``}>
      <NavigationMenuDemo />
      <main className={`yp-2`}>
        {children}
      </main>
      <PageFooter />
    </main>
  );
};

export default PageTemplate;
