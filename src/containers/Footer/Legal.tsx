// components/LegalContent.tsx
interface LegalContentProps {
  subTitle?: string;
  lastUpdatedLabel?: string;
  lastUpdated?: string;
  points: string[];
}

const LegalContent = ({
  subTitle,
  lastUpdatedLabel,
  lastUpdated,
  points,
}: LegalContentProps) => {
  return (
    <div className="space-y-4 text-sm leading-relaxed">
      {subTitle && <p className="text-white-100">{subTitle}</p>}
      {lastUpdated && (
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {lastUpdatedLabel}: {lastUpdated}
        </p>
      )}
      <ul className="list-disc pl-5 space-y-2">
        {points.map((point, idx) => (
          <li className="text-white-100" key={`${subTitle}_${idx}`}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LegalContent;
