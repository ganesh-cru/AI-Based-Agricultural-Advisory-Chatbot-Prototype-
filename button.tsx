import React from "react"

export function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
    >
      {children}
    </button>
  )
}
