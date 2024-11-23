import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface CodeSnippet {
  language: 'typescript' | 'rust' | 'go' | 'java';
  code: string;
}

const CodeCard = () => {
  const [activeTab, setActiveTab] = useState<CodeSnippet['language']>('typescript');
  
  const codeSnippets: Record<CodeSnippet['language'], string> = {
    typescript: `const greeting = (name: string): string => {
  return \`Hello, \${name}! Welcome to DevCircle\`;
};`,
    rust: `fn main() {
    let greeting = "Welcome to DevCircle";
    println!("Hello, Rustaceans! {}", greeting);
}`,
    go: `func main() {
    greeting := "Welcome to DevCircle"
    fmt.Println("Hello, Gophers!", greeting)
}`,
    java: `public class Greeting {
    public static void main(String[] args) {
        String greeting = "Welcome to DevCircle";
        System.out.println("Hello, Developers! " + greeting);
    }
}`
  };

  const languageColors: Record<CodeSnippet['language'], string> = {
    typescript: 'text-blue-500',
    rust: 'text-orange-500',
    go: 'text-cyan-500',
    java: 'text-red-500'
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden bg-[#1e1e1e] shadow-2xl">
      {/* Title bar */}
      <div className="h-8 bg-[#323233] flex items-center px-4 justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>
        <div className="flex space-x-4">
          {Object.keys(codeSnippets).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveTab(lang as CodeSnippet['language'])}
              className={cn(
                "text-sm px-3 py-1 rounded transition-colors",
                activeTab === lang 
                  ? `${languageColors[lang as CodeSnippet['language']]} bg-[#2d2d2d]` 
                  : "text-gray-400 hover:text-gray-300"
              )}
            >
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Code content */}
      <div className="p-6 font-mono text-sm">
        <pre className="text-gray-300">
          {codeSnippets[activeTab].split('\n').map((line, i) => (
            <div key={i} className="flex">
              <span className="w-8 text-gray-500 select-none">{i + 1}</span>
              <span className="flex-1">{line}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default CodeCard;