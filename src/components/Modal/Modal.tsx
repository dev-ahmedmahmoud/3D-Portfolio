import { useState } from "react";

interface LegalModalProps {
  title: string;
  content: React.ReactNode;
}

export default function LegalModal({ title, content }: LegalModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-sm underline hover:text-blue-600"
      >
        {title}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-black-100 rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <h2 className="text-lg font-bold mb-4 text-white-100">{title}</h2>
            <div className="prose dark:prose-invert max-h-[60vh] overflow-y-auto">
              {content}
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}