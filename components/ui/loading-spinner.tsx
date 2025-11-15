export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8" role="status" aria-live="polite">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-4 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-4 border-bitcoin-blue border-t-transparent animate-spin"></div>
      </div>
      <span className="sr-only">Caricamento...</span>
    </div>
  )
}

