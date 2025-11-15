"use client"

import { MoleIcon } from "@/components/icons/mole-icon"

interface FloatingElement {
  id: number
  type: 'bitcoin' | 'mole'
  size: number
  left: number
  top: number
  duration: number
  delay: number
}

export function AnimatedBackground() {
  // Generate random floating elements
  const elements: FloatingElement[] = [
    // Bitcoin symbols
    { id: 1, type: 'bitcoin', size: 80, left: 10, top: 15, duration: 20, delay: 0 },
    { id: 2, type: 'bitcoin', size: 100, left: 85, top: 25, duration: 25, delay: 2 },
    { id: 3, type: 'bitcoin', size: 60, left: 70, top: 60, duration: 18, delay: 4 },
    { id: 4, type: 'bitcoin', size: 90, left: 15, top: 75, duration: 22, delay: 1 },
    { id: 5, type: 'bitcoin', size: 70, left: 45, top: 10, duration: 19, delay: 3 },
    { id: 6, type: 'bitcoin', size: 85, left: 30, top: 50, duration: 21, delay: 5 },
    
    // Moli
    { id: 7, type: 'mole', size: 70, left: 5, top: 40, duration: 24, delay: 1.5 },
    { id: 8, type: 'mole', size: 90, left: 90, top: 70, duration: 26, delay: 3.5 },
    { id: 9, type: 'mole', size: 60, left: 50, top: 80, duration: 20, delay: 0.5 },
    { id: 10, type: 'mole', size: 75, left: 20, top: 30, duration: 23, delay: 2.5 },
    { id: 11, type: 'mole', size: 80, left: 75, top: 45, duration: 22, delay: 4.5 },
    { id: 12, type: 'mole', size: 65, left: 60, top: 20, duration: 19, delay: 1 },
  ]

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`,
          }}
        >
          {element.type === 'bitcoin' ? (
            <span 
              className="text-bitcoin-blue opacity-10"
              style={{ fontSize: `${element.size}px` }}
            >
              ₿
            </span>
          ) : (
            <div className="text-bitcoin-blue opacity-10">
              <MoleIcon size={element.size} />
            </div>
          )}
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
          }
          75% {
            transform: translateY(-15px) rotate(3deg);
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  )
}

